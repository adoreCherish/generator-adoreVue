<?php
header('Content-type:text/json');  
	class connMysql{
		public $servername;
		public $username;
		public $password;
		public $dbname;
		public $conn;
		public function __construct($servername,$username,$password,$dbname){
			$this->servername = $servername;
			$this->username = $username;
			$this->password = $password;
			$this->dbname = $dbname;
		}
		public function getConnection(){
			try{
				$dsn = "mysql:host=$this->servername;dbname=$this->dbname";
				$this->conn = new PDO($dsn,$this->username,$this->password);
			}catch(PDOException $e){
				echo $e->getMessage();
			}
		}

		public function showLists($sql){
			if($this->conn == null){
				$this->getConnection();
			}
				//$result = $this->conn->exec($sql);
				$result = $this->conn->query($sql);
				$arr = array();
				//$arr_test =array(1, 2, 3);
 				//print_r($arr_test);
				foreach($result as $row){
		            //print_r($row);
		            $arr[] =  $row;
		        }
		        print_r(json_encode($arr));

				// echo $result;
				//echo $arr;
				$this->closeCon();
				
		}
		public function closeCon(){
			$this->conn = null;
		}
	}

	class realConnection extends connMysql{
		public function __construct($servername,$username,$password,$dbname){
			parent::__construct($servername,$username,$password,$dbname);
		}
		public function updateRealData(){
			//$sql = 'UPDATE `cdHeroList` SET `description`=4 WHERE id=4';
			$sql = 'SELECT * FROM `cdHeroList`';
			$this->showLists($sql);
		}
	}

	$connection = new realConnection('localhost','root','','cdHero');
	$connection->updateRealData();
?>