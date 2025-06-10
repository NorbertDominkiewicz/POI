#!C:\Users\norbe\AppData\Local\Programs\Python\Python312\python.exe
import cgi
import cgitb
import os
import html

cgitb.enable()

DATA_FILE = os.path.abspath('/tmp/cgi_name.txt')

print("Content-type: text/html\n\n")
print("""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Name Filler</title>
</head>
<body>
    <div class="upperPanel">
        <div class="title">
            <h2>Name Filler</h2>
        </div>
        <div class="links">
            <div class="menu">
                <img src="graphics/menu.png">
                <div class="buttons">
                    <button>PHP</button>
                    <button>PYTHON</button>
                </div>
            </div>
        </div>
    </div>
    <div class="middlePanel">
        <div class="content">
            <div class="leftSide">
                <form method="GET" action="store_name.cgi">
                    <input type="text" name="imie" placeholder="Imie: ">
                    <input type="text" name="nazwisko" placeholder="Nazwisko: ">
                    <button type="submit">Add</button>
                </form>
            </div>
            <div class="rightSide">
                <p style='font-style: italic'>Imiona i nazwiska</p>""")

form = cgi.FieldStorage()
if 'imie' in form and 'nazwisko' in form:
    imie = html.escape(form.getvalue('imie'))
    nazwisko = html.escape(form.getvalue('nazwisko'))
    os.makedirs(os.path.join(os.path.dirname(__file__), 'tmp'), exist_ok=True)
    
    try:
        with open(DATA_FILE, 'a', encoding='utf-8') as f:
            f.write(f"{imie} {nazwisko} </br> \n")
    except Exception as e:
        print(f"<p style='color:red'>Błąd zapisu: {e}</p>")

try:
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, 'r', encoding='utf-8') as f:
            content = f.read()
            print(f"<p>{content}</p>")
    else:
        print("<p>Nie znaleziono pliku</p>")
except Exception as e:
    print(f"<p style='color:red'>Błąd odczytu pliku: {e}</p>")

print("""            </div>
        </div>
    </div>
    <div class="bottomPanel">
        <div class="footer">
            <p>
                <a href="https://alioth.uwb.edu.pl/pwi-lab/apache.html">Laboratorium 11</a>
            </p>
        </div>
    </div>
</body>
</html>""")