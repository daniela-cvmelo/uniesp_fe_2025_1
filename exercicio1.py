alturas = []
generos = []


for i in range(15):
    altura = float(input("Digite a altura (em metros): "))
    genero = input("Digite o gênero: (0 para feminino e 1 para masculino): ")
    
    alturas.append(altura)
    generos.append(genero)


num_feminino = generos.count("0")


alturas_masculino = [alturas[i] for i in range(15) if generos[i] == "1"]
if alturas_masculino:
    media_altura_masculino = sum(alturas_masculino) / len(alturas_masculino)
else:
    media_altura_masculino = 0


maior_altura = max(alturas)
menor_altura = min(alturas)


print("\nA) Número de mulheres:", num_feminino)
print("B) Média de altura dos homens:", round(media_altura_masculino, 2), "1")
print("C) Maior altura:", round(maior_altura, 2), "1")
print("   Menor altura:", round(menor_altura, 2), "1")
