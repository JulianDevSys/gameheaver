# 1) Creando el triqui

# Sintaxis lógica: tablero[fila][columna]
# Se juega escogiendo una casilla en el orden LetraNumero
# Ejemplo: casilla superior derecha = c1: Fila 1, Columna C
tablero = [[" "," "," "],
           [" "," "," "],
           [" "," "," "]]

def ImprimirTablero():
    print("    a    b    c ")
    temp = 1
    for i in tablero:
        print(temp, i)
        temp += 1

figuraJugador1 = ""
figuraJugador2 = ""
dificultad = 0
juegaJugador1 = False
contador = -2
listaJugadasJ1 = [" ", " ", " "]
listaJugadasJ2 = [" ", " ", " "]
contadorJugadasJ1 = 0
contadorJugadasJ2 = 0
activarIA = False
modoNormal = False

# Configuración inicial del juego
def Settings():
    print("Responder todo con MAYÚSCULAS")
    global figuraJugador1
    global figuraJugador2
    global dificultad
    global juegaJugador1
    global activarIA
    global modoNormal
    figuraJugador1 = input("Escoger X o O para jugar: ")
    if(figuraJugador1 == "X"):
        figuraJugador2 = "O"
    else: figuraJugador2 = "X"
    dificultad = int(input("Ingrese la dificultad del 1-8: "))
    temp = input("Desea comenzar primero? Y/N: ")
    if(temp == "Y"):
        juegaJugador1 = True
    else: juegaJugador1 = False
    temp = input("Desea activar la IA? Y/N: ")
    if(temp == "Y"):
        activarIA = True
    else: activarIA = False
    temp = input("Desea jugar el modo normal o especial? N/E: ")
    if(temp == "N"):
        modoNormal = True
    else: modoNormal = False

def ImprimirSettings():
    print(figuraJugador1, figuraJugador2, dificultad, juegaJugador1)

# Reglas Básicas del triqui
def CeldaDisponible(celda: str, estado):
    columna = 0
    if celda[0] == 'a':
        columna = 0
    elif celda[0] == 'b':
        columna = 1
    elif celda[0] == 'c':
        columna = 2
    fila = int(celda[1])-1
    if estado[fila][columna] == ' ':
        return True
    else:
        return False

def CheckSintaxCasilla(x, y):
    if y == 0:
        y = 'a'
    elif y == 1:
        y = 'b'
    elif y == 2:
        y = 'c'
    return str(y) + str(x + 1)

def ObtenerCasillasLibres(estado):
    listaCasillasLibres = []
    for x in range(3):
        for y in range(3):
            if estado[x][y] == ' ':
                casilla = CheckSintaxCasilla(x,y)
                listaCasillasLibres.append(casilla)
    return listaCasillasLibres


def EsFinDelJuego(estado):
    #Revisar filas
    for x in range(3):
        if estado[x][0] == estado[x][1] == estado[x][2] and estado[x][0] != ' ':
            return True
    #Revisar columnas
    for x in range(3):
        if estado[0][x] == estado[1][x] == estado[2][x] and estado[0][x] != ' ':
            return True
    #Revisar diagonales
    if estado[0][0] == estado[1][1] == estado[2][2] and estado[0][0] != ' ':
        return True
    if estado[0][2] == estado[1][1] == estado[2][0] and estado[0][2] != ' ':
        return True
    #Revisar si todas las casillas están llenas
    listaCasillasLibres = ObtenerCasillasLibres(estado)
    if len(listaCasillasLibres) == 0:
        return True
    #Si todos los casos fallan, el juego continúa
    return False
    
#Funciones para desarrollar la IA
def ContarLineas(estado, figura):
    contador = 0
    #Revisar filas
    for x in range(3):
        if ((estado[x][0] == figura or estado[x][0] == ' ') and (estado[x][1] == figura or estado[x][1] == ' ') and (estado[x][2] == figura or estado[x][2] == ' ')):
            contador += 1
    #Revisar columnas
    for x in range(3):
        if ((estado[0][x] == figura or estado[0][x] == ' ') and (estado[1][x] == figura or estado[1][x] == ' ') and (estado[2][x] == figura or estado[2][x] == ' ')):
            contador += 1
    #Revisar diagonales
    if ((estado[0][0] == figura or estado[0][0] == ' ') and (estado[1][1] == figura or estado[1][1] == ' ') and (estado[2][2] == figura or estado[2][2] == ' ')):
        contador += 1
    if ((estado[0][2] == figura or estado[0][2] == ' ') and (estado[1][1] == figura or estado[1][1] == ' ') and (estado[2][0] == figura or estado[2][0] == ' ')):
        contador += 1
    return contador

def CalcularGanador(estado, figura):
    #Revisar filas
    for x in range(3):
        if estado[x][0] == estado[x][1] == estado[x][2] and estado[x][0] == figura:
            return True
    #Revisar columnas
    for x in range(3):
        if estado[0][x] == estado[1][x] == estado[2][x] and estado[0][x] == figura:
            return True
    #Revisar diagonales
    if estado[0][0] == estado[1][1] == estado[2][2] and estado[0][0] == figura:
        return True
    if estado[0][2] == estado[1][1] == estado[2][0] and estado[0][2] == figura:
        return True
    #Si todos los casos fallan, la figura escogida no es ganadora
    return False

# Utility: calcular la utilidad de un estado de juego
# Utilidad = líneas disponibles para X - líneas disponibles para O, valor máximo si gana jugador 1, valor mínimo si gana jugador 2
def Utilidad(estado):
    #Sintaxis de un estado del tablero: estado[fila][columna]
    cantLineasJ1 = ContarLineas(estado, figuraJugador1)
    cantLineasJ2 = ContarLineas(estado, figuraJugador2)
    ganaJugador1 = CalcularGanador(estado, figuraJugador1)
    ganaJugador2 = CalcularGanador(estado, figuraJugador2)
    #Antes estaba configurado para que la IA fuera MIN, ahora la IA es MAX
    if ganaJugador1:
        return float("-inf")
    elif ganaJugador2:
        return float("inf")
    else:
        return cantLineasJ2 - cantLineasJ1
        #return cantLineasJ1 - cantLineasJ2
    
#Inicio del algoritmo Minimax
# Min
# Antes de la modificación especial: def ValorMinimo(estado, profundidad, contador, alpha, beta):
def ValorMinimo(estado, profundidad, contador, alpha, beta, listaJugadasJ1, listaJugadasJ2, contador1, contador2):
    if EsFinDelJuego(estado) or contador == profundidad:
        return Utilidad(estado)
    casillasDisponibles = ObtenerCasillasLibres(estado)
    utilidad = float("inf")
    for x in range(len(casillasDisponibles)):
        # Si es modo especial
        if not modoNormal:
            jugadaEspecial = JugarEspecial(casillasDisponibles[x], True, listaJugadasJ1, listaJugadasJ2, contador1, contador2)
            v = ValorMaximo(jugadaEspecial[0], dificultad, contador + 1, alpha, beta, jugadaEspecial[1], jugadaEspecial[2], jugadaEspecial[3], jugadaEspecial[4])
        # Si es modo normal
        else:
            v = ValorMaximo(Jugar(casillasDisponibles[x], figuraJugador1, estado), profundidad, contador + 1, alpha, beta, 0, 0, 0, 0)
        # Poda
        if v < beta:
            beta = v
        if alpha >= beta:
            return beta
        if v < utilidad:
            utilidad = v
    return utilidad


# Max
# Antes de la modificación especial: def ValorMinimo(estado, profundidad, contador, alpha, beta):
def ValorMaximo(estado, profundidad, contador, alpha, beta, listaJugadasJ1, listaJugadasJ2, contador1, contador2):
    if EsFinDelJuego(estado) or contador == profundidad:
        return Utilidad(estado)
    casillasDisponibles = ObtenerCasillasLibres(estado)
    utilidad = float("-inf")
    for x in range(len(casillasDisponibles)):
        # Si es modo especial
        if not modoNormal:
            jugadaEspecial = JugarEspecial(casillasDisponibles[x], False, listaJugadasJ1, listaJugadasJ2, contador1, contador2)
            v = ValorMinimo(jugadaEspecial[0], dificultad, contador + 1, alpha, beta, jugadaEspecial[1], jugadaEspecial[2], jugadaEspecial[3], jugadaEspecial[4])
        # Si es modo normal
        else:
            v = ValorMinimo(Jugar(casillasDisponibles[x], figuraJugador2, estado), profundidad, contador + 1, alpha, beta, 0, 0, 0, 0)
        # Poda
        if v > alpha:
            alpha = v
        if alpha >= beta:
            return alpha
        if v > utilidad:
            utilidad = v
    return utilidad

# Jugar:
def Jugar(casilla, figura, estado):
    global contador
    contador += 1
    columna = 0
    if casilla[0] == 'a':
        columna = 0
    elif casilla[0] == 'b':
        columna = 1
    elif casilla[0] == 'c':
        columna = 2
    fila = int(casilla[1])-1
    copiaEstado = ObtenerCopiaTablero(estado)
    copiaEstado[fila][columna] = figura
    return copiaEstado

# Jugar especial
def JugarEspecial(casilla, juegaJugador1, listaJugadasJ1, listaJugadasJ2, contador1, contador2):
    global contador
    contador += 1
    figura = ""
    tablero = [[" ", " ", " "],
               [" ", " ", " "],
               [" ", " ", " "]]
    copiaListaJugadasJ1 = [" ", " ", " "]
    copiaListaJugadasJ2 = [" ", " ", " "]
    for x in range(3):
        copiaListaJugadasJ1[x] = listaJugadasJ1[x]
        copiaListaJugadasJ2[x] = listaJugadasJ2[x]
    if juegaJugador1:
        copiaListaJugadasJ1[contador1 % 3] = casilla
    else:
        copiaListaJugadasJ2[contador2 % 3] = casilla
    # Imprimir en el tablero las jugadas del jugador 1
    figura = figuraJugador1
    for x in range(3):
        casilla = copiaListaJugadasJ1[x]
        if casilla == " ": continue
        columna = 0
        if casilla[0] == 'a':
            columna = 0
        elif casilla[0] == 'b':
            columna = 1
        elif casilla[0] == 'c':
            columna = 2
        fila = int(casilla[1])-1
        tablero[fila][columna] = figura
    # Impirmir en el tablero las jugadas del jugador 2
    figura = figuraJugador2
    for x in range(3):
        casilla = copiaListaJugadasJ2[x]
        if casilla == " ": continue
        columna = 0
        if casilla[0] == 'a':
            columna = 0
        elif casilla[0] == 'b':
            columna = 1
        elif casilla[0] == 'c':
            columna = 2
        fila = int(casilla[1])-1
        tablero[fila][columna] = figura
    if juegaJugador1:
        return [tablero, copiaListaJugadasJ1, copiaListaJugadasJ2, contador1 + 1, contador2]
    return [tablero, copiaListaJugadasJ1, copiaListaJugadasJ2, contador1, contador2 + 1]

def ObtenerCopiaTablero(estado):
    copia = [[" ", " ", " "],
             [" ", " ", " "],
             [" ", " ", " "]]
    for x in range(3):
        for y in range(3):
            copia[x][y] = estado[x][y]
    return copia

# Antes de la modificacion especial: LaIA(estado)
def LaIA(estado):
    casillasDisponibles = ObtenerCasillasLibres(estado)
    listaOpciones = []
    #utilidad = float("inf")
    utilidad = float("-inf")
    for x in range(len(casillasDisponibles)):
        tupla = []
        tupla.append(casillasDisponibles[x])
        # Si es modo especial:
        if not modoNormal:
            jugadaEspecial = JugarEspecial(casillasDisponibles[x], False, listaJugadasJ1, listaJugadasJ2, contadorJugadasJ1, contadorJugadasJ2)
            v = ValorMinimo(jugadaEspecial[0], dificultad, 0, float("-inf"), float("inf"), jugadaEspecial[1], jugadaEspecial[2], jugadaEspecial[3], jugadaEspecial[4])
        #v = ValorMaximo(Jugar(casillasDisponibles[x], figuraJugador2, estado), dificultad, 0, float("-inf"), float("inf"))
        #v = ValorMaximo(jugadaEspecial[0], dificultad, 0, float("-inf"), float("inf"), jugadaEspecial[1], jugadaEspecial[2], jugadaEspecial[3], jugadaEspecial[4])
        # Si es modo normal:
        else:
            v = ValorMinimo(Jugar(casillasDisponibles[x], figuraJugador2, estado), dificultad, 0, float("-inf"), float("inf"), 0, 0, 0, 0)
        #if v <= utilidad:
        if v > utilidad:
            utilidad = v
        tupla.append(v)
        listaOpciones.append(tupla)
    #Antes: estaba construido para que la IA fuera MIN, ahora se atualiza para que la IA sea MAX
    pivot = ["", float("-inf")]
    for i in range(len(listaOpciones)):
        if listaOpciones[i][1] >= pivot[1]:
            pivot = listaOpciones[i]
    return pivot[0]

Settings()
while True:
    ImprimirTablero()
    if EsFinDelJuego(tablero):
        print("Fin del juego")
        utilidadEstado = Utilidad(tablero)
        print("Utilidad actual: " + str(utilidadEstado))
        if utilidadEstado == float("inf"):
            print("Gana Jugador 2")
        elif utilidadEstado == float("-inf"):
            print("Gana Jugador 1")
        break
    if juegaJugador1:
    # Jugada del jugador 1
        print("Juega jugador 1")
        print("Utilidad actual: " + str(Utilidad(tablero)))
        casilla = input("Elige tu casilla a jugar: ")
        if CeldaDisponible(casilla, tablero):
            # Si es modo normal:
            if modoNormal:
                tablero = Jugar(casilla, figuraJugador1, tablero)
            # Si es modo especial:
            else:
                jugadaEspecial = JugarEspecial(casilla, True, listaJugadasJ1, listaJugadasJ2, contadorJugadasJ1, contadorJugadasJ2)
                tablero = jugadaEspecial[0]
                listaJugadasJ1 = jugadaEspecial[1]
                contadorJugadasJ1 = jugadaEspecial[3]
            juegaJugador1 = not juegaJugador1
    else:
    # Jugada del jugador 2
        print("Juega jugador 2")
        print("Utilidad actual: " + str(Utilidad(tablero)))
        if activarIA:
            casilla = LaIA(tablero)
        else: 
            casilla = input("Elige tu casilla a jugar: ")
        if CeldaDisponible(casilla, tablero):
            # Si es modo normal:
            if modoNormal:
                tablero = Jugar(casilla, figuraJugador2, tablero)
            # Si es modo especial:
            elif not modoNormal:
                jugadaEspecial = JugarEspecial(casilla, False, listaJugadasJ1, listaJugadasJ2, contadorJugadasJ1, contadorJugadasJ2)
                tablero = jugadaEspecial[0]
                listaJugadasJ2 = jugadaEspecial[2]
                contadorJugadasJ2 = jugadaEspecial[4]
            juegaJugador1 = not juegaJugador1
            print("contador: " + str(contador))

#ImprimirSettings()
#ImprimirTablero()
