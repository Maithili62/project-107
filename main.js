function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/vpLnEYACQ/model.json',modalLoaded);

}

function modalLoaded()
{
    console.log("Modal Loaded");
    classifier.classify(gotResults);
}

function gotResults(error , results)
{
    if (error)
    {
        console.log(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*255) + 1;
        random_number_g = Math.floor(Math.random()*255) + 1;
        random_number_b = Math.floor(Math.random()*255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label
        document.getElementById("result_accuracy").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_accuracy").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    imag = document.getElementById("image_animal");

        if (results[0].label == "barking")
        {
          imag.src = "dog.png";
        }
        else if (results[0].label == "meowing")
        {
            imag.src = "cat.png";
        }
        else if (results[0].label == "roaring")
       
        {
            imag.src = "lion.jpg";
        }
        
        else{
            imag.src = "bird.png";
        }
    }
}