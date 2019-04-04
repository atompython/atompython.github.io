function displayPy3() {
  var instr = document.getElementById("instructions");
  instr.innerHTML = "<li>Go to the <a href='https://www.python.org/' target='_blank'>www.python.org</a></li>";
  instr.innerHTML += "<li>In the menu click <a href='https://www.python.org/downloads/' class='downloadHref'><span class='download'> Downloads </span></a></li>";
  instr.innerHTML += "<li>Scroll down to the '<span class='specRelease'>Looking for a specific release?</span>' table and click on <a href='https://www.python.org/downloads/release/python-373/' style='text-decoration:none;'><span class='downloadBlue'>Download</span></a> button with the newest version of Python 3.</li>";
  instr.innerHTML += "<li>Scroll down to the '<span class='files'>Files</span>' table and in the '<span class='files'>Version</span>' column click <a href='https://www.python.org/ftp/python/3.7.3/python-3.7.3-amd64.exe' style='text-decoration:none;'><span class='downloadBlueAndYellow'>Windows x86-64 executable installer</span></a> or <a href='https://www.python.org/ftp/python/3.7.3/python-3.7.3.exe' style='text-decoration:none;'><span class='downloadBlueAndYellow'>Windows x86 executable installer</span></a>(depends on system).</li>";
  instr.innerHTML += "<li>Open the downloaded file.</li>";
  instr.innerHTML += "<img src='img/py_installer.png' alt=''>";
  instr.innerHTML += "<li>Select 'Add Python 3.7 to PATH' and click 'Cusomize installation'.</li>";
  instr.innerHTML += "<li>Just press 'Next' in the next screen.</li>";
  instr.innerHTML += "<img src='img/py_installer2.png' alt=''>";
  instr.innerHTML += "<li>In ths window we must specify where will the files will we stored. Click 'Browse' and install it in the folder which is is most suitable for you.</li>";
  instr.innerHTML += "<li>Open cmd and type 'python' to check if the package is correctly installed. (To exit the program enter 'exit()'')</li>";
  instr.innerHTML += "<li><b>Optional if you are installing two enviroments:</b><ul><li>Go to the Python folder and change the name of the python.exe to python3.exe and go to the 'Scripts' and change name of the pip manager from pip.exe to pip3.exe so it wont interfere with your second enviroment command for the python.</li></ul></li>"
  document.getElementById("instructions").style.opacity = "1";
  document.getElementById("instructions").style.top = "0";
}

function displayPy2() {
  var instr = document.getElementById("instructions");
  console.log("a");
  instr.innerHTML = "<li>Go to the <a href='https://www.python.org/' target='_blank'>www.python.org</a></li>";
  instr.innerHTML += "<li>In the menu click <a href='https://www.python.org/downloads/' class='downloadHref'><span class='download'> Downloads </span></a></li>";
  instr.innerHTML += "<li>Scroll down to the '<span class='specRelease'>Looking for a specific release?</span>' table and click on <a href='https://www.python.org/downloads/release/python-2716/' style='text-decoration:none;'><span class='downloadBlue'>Download</span></a> button with the newest version of Python 2.</li>";
  instr.innerHTML += "<li>Scroll down to the '<span class='files'>Files</span>' table and in the '<span class='files'>Version</span>' column click <a href='https://www.python.org/ftp/python/2.7.16/python-2.7.16.amd64.msi' style='text-decoration:none;'><span class='downloadBlueAndYellow'>Windows x86-64 MSI installer</span></a> or <a href='https://www.python.org/ftp/python/2.7.16/python-2.7.16.msi' style='text-decoration:none;'><span class='downloadBlueAndYellow'>Windows x86 MSI installer</span></a>(depends on system).</li>";
  instr.innerHTML += "<li>Open the downloaded file.</li>";
  instr.innerHTML += "<img src='img/py2_installer2.png' alt=''>";
  instr.innerHTML += "<li>Select option 'Install just for me' and click 'Next'.</li>";
  instr.innerHTML += "<img src='img/py2_installer3.png' alt=''>";
  instr.innerHTML += "<li>In ths window we must specify where will the files will we stored. Click arrows to move around directory and install it in the folder which is is most suitable for you.</li>";
  instr.innerHTML += "<li>Just press 'Next' in the next screen and installation is complicate.</li>";
  instr.innerHTML += "<li>Open cmd and type 'python' to check if the package is correctly installed. (To exit the program enter 'exit()'')</li>";
  instr.innerHTML += "<li><b>Optional if you are installing two enviroments:</b><ul><li>Go to the Python folder and change the name of the python.exe to python2.exe and go to the 'Scripts' and change name of the pip manager from pip.exe to pip2.exe so it wont interfere with your second enviroment command for the python.</li></ul></li>"
  document.getElementById("instructions").style.opacity = "1";
  document.getElementById("instructions").style.top = "0";
}

function py3() {
  if(document.getElementById("py3").style.backgroundColor != "rgb(166, 44, 56)"){
    document.getElementById("py3").style.backgroundColor = "#A62C38";
    document.getElementById("py2").style.backgroundColor = "#d33847";
    document.getElementById("instructions").style.top = "20px";
    document.getElementById("instructions").style.opacity = "0";
    setTimeout(displayPy3, 510);
  }
}

function py2() {
  if(document.getElementById("py2").style.backgroundColor != "rgb(166, 44, 56)"){
    document.getElementById("py2").style.backgroundColor = "#A62C38";
    document.getElementById("py3").style.backgroundColor = "#d33847";
    document.getElementById("instructions").style.top = "20px";
    document.getElementById("instructions").style.opacity = "0";
    setTimeout(displayPy2, 510);
  }
}
