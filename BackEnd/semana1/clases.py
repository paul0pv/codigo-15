class Person:
    def __init__(self, name, lastname, phone_number, age, dni):
        self.name = name
        self.lastname = lastname
        self.phone_number = phone_number
        self.age = age
        self.__dni = dni
        pass
    
    def saludar(self):
        print(f"Hola, me llamo {self.name} {self.lastname}, mi numero es {self.phone_number} y mi edad es {self.age}")
    
    def get_fullname(self):
        return f"{self.name} {self.lastname}"
    
    def format_phone_number(self):
        return f"+51{self.phone_number}"
 
    def get_dni(self):
        return self.__dni
    
persona1 = Person("Pepe","Zapata",9999,52, 72222222)
persona1.phone_number = 987654321
persona1.saludar()
print(persona1.format_phone_number())
print(persona1.get_dni())
