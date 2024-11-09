<?php
/* HistoricoClima
  Create: 16/10/2024
  Author: Fagner Romão
*/

class HistoricoClima {
    private $conn;
    private $table_name = "historico_clima";

    public $id;
    public $data_registro;
    public $cidade;
    public $latitude;
    public $longitude;
    public $data_atualizacao;
    public $condicao_tempo;
    public $temp_atual;
    public $temp_max;
    public $temp_min;
    public $pressao;
    public $umidade;
    public $vento_kmh;
    public $chance_chuva;
    public $nascer_sol;
    public $por_sol;

    public function __construct($db) {   
        $this->conn = $db;
    }

    // Create
    public function create() {
        $query = "INSERT INTO " . $this->table_name . " 
                  (data_registro, cidade, latitude, longitude, data_atualizacao, condicao_tempo, temp_atual, temp_max, temp_min, pressao, umidade, vento_kmh, chance_chuva, nascer_sol, por_sol)
                  VALUES (:data_registro, :cidade, :latitude, :longitude, :data_atualizacao, :condicao_tempo, :temp_atual, :temp_max, :temp_min, :pressao, :umidade, :vento_kmh, :chance_chuva, :nascer_sol, :por_sol)";

        $stmt = $this->conn->prepare($query);

        // Bind dos valores
        $stmt->bindParam(":data_registro", $this->data_registro);
        $stmt->bindParam(":cidade", $this->cidade);
        $stmt->bindParam(":latitude", $this->latitude);
        $stmt->bindParam(":longitude", $this->longitude);
        $stmt->bindParam(":data_atualizacao", $this->data_atualizacao);
        $stmt->bindParam(":condicao_tempo", $this->condicao_tempo);
        $stmt->bindParam(":temp_atual", $this->temp_atual);
        $stmt->bindParam(":temp_max", $this->temp_max);
        $stmt->bindParam(":temp_min", $this->temp_min);
        $stmt->bindParam(":pressao", $this->pressao);
        $stmt->bindParam(":umidade", $this->umidade);
        $stmt->bindParam(":vento_kmh", $this->vento_kmh);
        $stmt->bindParam(":chance_chuva", $this->chance_chuva);
        $stmt->bindParam(":nascer_sol", $this->nascer_sol);
        $stmt->bindParam(":por_sol", $this->por_sol);

        return $stmt->execute();
    }

    // Read
    public function read() {
        $query = "SELECT * FROM " . $this->table_name;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    // Update
    public function update() {
        $query = "UPDATE " . $this->table_name . "
                  SET data_registro = :data_registro, cidade = :cidade, latitude = :latitude, longitude = :longitude, data_atualizacao = :data_atualizacao,
                      condicao_tempo = :condicao_tempo, temp_atual = :temp_atual, temp_max = :temp_max, temp_min = :temp_min,
                      pressao = :pressao, umidade = :umidade, vento_kmh = :vento_kmh, chance_chuva = :chance_chuva,
                      nascer_sol = :nascer_sol, por_sol = :por_sol
                  WHERE id = :id";

        $stmt = $this->conn->prepare($query);

        // Bind dos valores
        $stmt->bindParam(":id", $this->id);
        $stmt->bindParam(":data_registro", $this->data_registro);
        $stmt->bindParam(":cidade", $this->cidade);
        $stmt->bindParam(":latitude", $this->latitude);
        $stmt->bindParam(":longitude", $this->longitude);
        $stmt->bindParam(":data_atualizacao", $this->data_atualizacao);
        $stmt->bindParam(":condicao_tempo", $this->condicao_tempo);
        $stmt->bindParam(":temp_atual", $this->temp_atual);
        $stmt->bindParam(":temp_max", $this->temp_max);
        $stmt->bindParam(":temp_min", $this->temp_min);
        $stmt->bindParam(":pressao", $this->pressao);
        $stmt->bindParam(":umidade", $this->umidade);
        $stmt->bindParam(":vento_kmh", $this->vento_kmh);
        $stmt->bindParam(":chance_chuva", $this->chance_chuva);
        $stmt->bindParam(":nascer_sol", $this->nascer_sol);
        $stmt->bindParam(":por_sol", $this->por_sol);

        return $stmt->execute();
    }

    // Delete
    public function delete() {
        $query = "DELETE FROM " . $this->table_name . " WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":id", $this->id);
        return $stmt->execute();
    }
}
?>
