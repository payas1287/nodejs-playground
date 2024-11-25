-- Bu artık bir yorum satırıdır. SingleLine
/*
	Multiline
	Comments
*/
-- SELECT 1 AS One; -- Satır sonu yorum için -- kullanabiliriz.
-- SELECT 1 AS one, /* araya yorum ekleyebilirim. */ 2 AS two;

-- SELECT 1 AS one; -- SQL komutlarını birbirinden ayırmak için ";" kullanırız. Tek bir komut satırı yazacak isek konmayabilir. Konması tavsiyedir.

-- NOT Case-Sensitive (küçük-BÜYÜK harf ayrımı YAPMAZ)
-- SELECT 1 AS one;
-- select 1 as one; -- ! Piyasa standartı olarak uygun değildir.

-- * Piyasa Standartları:
-- * * SQL'in Temel komutları daima BÜYÜK harfle yazılır. -- SELECT * FROM albumName WHERE column=21 AND ...
-- * * String verilerde tek-tırnak veya çift-tırnak kullanabiliriz. Standart olanı tek tırnaktır. -- SELECT 'string-data' AS data
-- * * Her bir temel komut ayrı satıra yazılır.
/*
SELECT *
FROM tableName
WHERE column=1
	AND (column2=1 OR column3=1)
*/

--- --- --- SQL --- --- ---

-- * SELECT -- Seç getir.
-- * FROM -- Hangi tablodan.
-- SELECT * FROM Album; -- * = Tüm Sutunlar.
-- SELECT Title, ArtistId FROM Album; -- İstediğim sutunları getir. -- Tavsiye edilen sutun isimlerini tek-tek yazmaktır. (* kullanmak kaçınmalıyız)

-- * AS -- Lakap Takma -- Tablo ve sutunları geçici adlandırmak için kullanırız.
-- SELECT 'data-123' AS baslik; -- string yazdır.
-- SELECT 1+2*5 AS toplam; -- matematiksel işlem yapabilirim.
-- SELECT AlbumId AS no, Title AS baslik FROM Album; -- Sutun isimlendirme.
-- SELECT AlbumId+100 AS id, Title AS baslik FROM Album;











