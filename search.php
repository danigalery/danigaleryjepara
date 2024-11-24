<?php
// Koneksi ke database
$servername = "localhost";
$username = "root"; // sesuaikan dengan username MySQL Anda
$password = ""; // sesuaikan dengan password MySQL Anda
$dbname = "dani_galeri_jepara"; // sesuaikan dengan nama database Anda

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Ambil kata kunci pencarian dari formulir
$query = isset($_GET['query']) ? $_GET['query'] : '';

if (!empty($query)) {
    // Query SQL untuk mencari produk berdasarkan kata kunci
    $sql = "SELECT * FROM produk WHERE nama_produk LIKE ? OR deskripsi LIKE ?";
    $stmt = $conn->prepare($sql);
    $searchTerm = '%' . $query . '%';
    $stmt->bind_param("ss", $searchTerm, $searchTerm);

    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo "<h2>Hasil Pencarian untuk: " . htmlspecialchars($query) . "</h2>";
        echo "<ul>";
        while ($row = $result->fetch_assoc()) {
            echo "<li>" . htmlspecialchars($row['nama_produk']) . " - " . htmlspecialchars($row['deskripsi']) . "</li>";
        }
        echo "</ul>";
    } else {
        echo "<p>Tidak ada produk yang ditemukan.</p>";
    }

    $stmt->close();
} else {
    echo "<p>Silakan masukkan kata kunci pencarian.</p>";
}

$conn->close();
?>
