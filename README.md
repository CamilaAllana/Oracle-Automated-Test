## Oracle-Automated-Test

 Cypress Automated Test for QA Application

Este repositório contém um teste automatizado usando Cypress para validar as funcionalidades principais de um aplicativo de controle de pedidos e gráfico de produtos. O teste se concentra em capturar e verificar dados exibidos em um gráfico, alterar dados da tabela e garantir que as alterações se reflitam corretamente tanto na tabela quanto no gráfico.

# Objetivo do Teste

O objetivo do teste é verificar que:

Os valores iniciais do gráfico são salvos em memória.
A quantidade de um pedido específico pode ser alterada e a alteração é refletida corretamente na tabela e no gráfico.
A localização de um pedido pode ser modificada e o gráfico e a tabela exibem essas mudanças adequadamente.

# Estrutura do Teste

O teste realiza as seguintes etapas:

  Captura dos Valores Iniciais do Gráfico
    Localiza o gráfico e armazena os valores iniciais de cada seção.

  Alteração da Quantidade de um Pedido
    Acessa a tabela e modifica a quantidade do pedido com ID 10 para "20".
    Verifica se os valores da tabela e do gráfico são atualizados após a alteração.

  Alteração da Localização de um Pedido
    Atualiza a localização do pedido com ID 10 para "Deli".
    Confirma que os dados na tabela e no gráfico foram alterados conforme a atualização.
