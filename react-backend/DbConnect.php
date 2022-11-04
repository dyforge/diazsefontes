<?php 
	/**
	* Database Connection
	*/
	class DbConnect {
		private $server = 'localhost';
		private $dbname = 'hxj0776_wdmproject';
		private $user = 'hxj0776_root';
		private $pass = 'wdmproject2022';

		public function connect() {
			try {
				$conn = new PDO('mysql:host=' .$this->server .';dbname=' . $this->dbname, $this->user, $this->pass);
				$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				return $conn;
			} catch (\Exception $e) {
				echo "Database Error: " . $e->getMessage();
			}
		}
	}
 ?>