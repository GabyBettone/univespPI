<?php
/* Database.php
  Create: 16/10/2024
  Author: Fagner Romão
*/

class Database {
    private $host = LOCALHOST;
    private $db_name = DB_NAME;
    private $username = USERNAME;
    private $password = PASSWORD;
    public $conn;

    public function getConnection() {
        $this->conn = null;
        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $exception) {
            echo "Erro de conexão: " . $exception->getMessage();
        }
        
        return $this->conn;
    }
}
?>
