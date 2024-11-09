<?php

/* incluir.php
  Create: 16/10/2024
  Author: Fagner Romão*/
include 'database.php';
include 'historicoClima.php';
include 'config.php';

$dados = json_decode(file_get_contents('php://input'), true);

$database = new Database();
$db = $database->getConnection();

$clima = new HistoricoClima($db);

// Criando um novo registro
$clima->data_registro = $dados['data_registro'];
$clima->cidade = $dados['cidade'];
$clima->latitude = $dados['latitude'];
$clima->longitude = $dados['longitude'];
$clima->data_atualizacao = $dados['data_atualizacao'];
$clima->condicao_tempo = $dados['condicao_tempo'];
$clima->temp_atual = $dados['temp_atual'];
$clima->temp_max = $dados['temp_max'];
$clima->temp_min = $dados['temp_min'];
$clima->pressao = $dados['pressao'];
$clima->umidade = $dados['umidade'];
$clima->vento_kmh = $dados['vento_kmh'];
$clima->chance_chuva = $dados['chance_chuva'];
$clima->nascer_sol = $dados['nascer_sol'];
$clima->por_sol = $dados['por_sol'];

/*   header('Location:index.HTML');*/
    
if($clima->create()) {
    /*echo ("<script>
   window.location.href='index.html'
    window.alert('Histórico de hoje enviados com sucesso!')    
    </script>"); */
    header('Location:index.html');
} else {
    echo "Erro ao criar registro.";
}
?>