alturas = []
generos = []

# Coletando os dados de 15 pessoas
for i in range(15):
    altura = float(input("Digite a altura (em metros): "))
    genero = input("Digite o gênero: (0 para feminino e 1 para masculino): ")
    
    alturas.append(altura)
    generos.append(genero)

# Contando o número de pessoas do gênero feminino
num_feminino = generos.count("0")

# Calculando a média de altura dos homens
alturas_masculino = [alturas[i] for i in range(15) if generos[i] == "1"]
if alturas_masculino:
    media_altura_masculino = sum(alturas_masculino) / len(alturas_masculino)
else:
    media_altura_masculino = 0

# Encontrando a maior e a menor altura do grupo
maior_altura = max(alturas)
menor_altura = min(alturas)

# Exibindo os resultados
print("\nA) Número de mulheres:", num_feminino)
print("B) Média de altura dos homens:", round(media_altura_masculino, 2), "1")
print("C) Maior altura:", round(maior_altura, 2), "1")
print("   Menor altura:", round(menor_altura, 2), "1")
