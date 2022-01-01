// preload images
  let imgkucing = new Image().src = "http://placekitten.com/300/200"
  let imgpanda = new Image().src = "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"  
  let imglion = new Image().src = "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
  let imggiraffe = new Image().src = "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
  let imgcamel = new Image().src = "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
  let imgdog = new Image().src = "66.jpg"

  
  function setImage(imageSelect) {
   theImageIndex = imageSelect.options[imageSelect.selectedIndex].value;

       document.images[0].src = eval("img" + theImageIndex);
      let bikinalert = (document.theForm.items.value);
    
    if(bikinalert == "kucing"){
      alert('ini gambar cat');
    }
    else if(bikinalert == "panda"){
      alert('ini gambar panda');
    }
    else if(bikinalert == "lion"){
      alert('ini gambar lion');
    }
    else if(bikinalert == "giraffe"){
      alert('ini gambar giraffe');
    }
    else if(bikinalert == "camel"){
      alert('ini gambar camel');
    }
    else if(bikinalert == "dog"){
      alert('ini gambar dog');
    }
    else{
      alert('kosong');
    }
  }