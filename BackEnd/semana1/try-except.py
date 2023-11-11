def dividir(n1,n2):
    try:
        return n1/n2
    except ZeroDivisionError:
        return "No se puede dividir entre 0"
    
print(dividir(10,20))
print(dividir(5,0))
print(dividir(15,3))

def convertir_a_entero(text):
    try:
        return int(text)
    except Exception as e:
        return f"Error: {e}"
    
print(convertir_a_entero("hola"))