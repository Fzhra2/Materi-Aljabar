function ExecuteScript(strId)
{
  switch (strId)
  {
      case "64u0cyvD9NT":
        Script1();
        break;
      case "6oGvrkH5a6G":
        Script2();
        break;
      case "6KcomaLQTfW":
        Script3();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="Aljabar.mp3";
audio.load();
audio.play();
audio.volume=0.5;
}

function Script2()
{
  var audio = document.getElementById('bgSongku');
audio.src="Happy.mp3";
audio.load();
audio.play();
audio.volume=0.5;
}

function Script3()
{
  var audio = document.getElementById('bgSongku');
audio.src="Happy.mp3";
audio.load();
audio.play();
audio.volume=0.5;
}

