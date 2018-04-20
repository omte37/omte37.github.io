$(function(){
	// ganti judul
	$("h2").text("Resep Bala-Bala");

	// tambah list
	$("ul").append("<Li>Sayuran</li>");

	// tambah bahan baru 
	// bila user klik tombol tambah
	$("#tambah").click(function(){
		//ambil dulu nilai dari bahanbaru var=variabel
		var bahan = $("#bahanbaru") .val();

		// jangan tambahkan list bila bahannya kosong
		if(bahan.trim() == "") return false
		// tambahkan data bahanbaru ke list
		$("#bahan").append("<li>"+ bahan + "</li>");

		// bersihkan input(bahan)
		$("#bahanbaru"). val("").focus();
	})

	// jalankan aksi klik bila tombol enter ditekan
	$("#bahanbaru").keypress(function(e){
		var key = e.which;
		if(key == 13){
			$("#tambah") .click();
	}
})