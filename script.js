// function showMyImage(fileInput) {
//     var files = fileInput.files;
//     for (var i = 0; i < files.length; i++) {           
//         var file = files[i];
//         var imageType = /image.*/;     
//         if (!file.type.match(imageType)) {
//             continue;
//         }           
//         var img=document.getElementById("thumbnil");            
//         img.file = file;    
//         var reader = new FileReader();
//         reader.onload = (function(aImg) { 
//             return function(e) { 
//                 aImg.src = e.target.result; 
//             }; 
//         })(img);
//         reader.readAsDataURL(file);
//     }    
// }

function showPreview(event){
    if(event.target.files.length > 0){
        var src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("file-up-preview");
        preview.src = src;
        preview.style.display = "block";
    }
}