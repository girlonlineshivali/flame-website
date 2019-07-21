function myFunction(){
  var zip = prompt("Enter your zip code", 95129);
  if ((zip >= 95322 && zip <= 95330) || (zip >= 95350 && zip <= 95358)){
    document.getElementById("p").innerHTML = "District 10; Josh Harder";
    document.getElementById("p1").innerHTML = "ph: (202) 225-4540, fax: (124) 563-7890";
    document.getElementById("p4").src = "https://cdn.glitch.com/f8d173a9-ef09-43f5-bbb1-f179a5ed06ae%2Fjosh.jpg?v=1563664820093";
} else if ((zip >= 94516 && zip <= 94530) || (zip >= 94801 && zip <= 94808)){
    document.getElementById("p").innerHTML = "District 11; Mark DeSaulnier";
    document.getElementById("p1").innerHTML = "ph: (202) 225-2095, fax: (202) 225-5609";
    document.getElementById("p4").src = "https://cdn.glitch.com/f8d173a9-ef09-43f5-bbb1-f179a5ed06ae%2Fmark.jpeg?v=1563664860696";
} else if ((zip >= 94114 && zip <= 94134) || (zip >= 94839 && zip <= 94847)){
    document.getElementById("p").innerHTML = "District 12; Nancy Pelosi";
    document.getElementById("p1").innerHTML = "ph: (202) 225-4965, fax: (202) 225-8259";
    document.getElementById("p4").src = "https://cdn.glitch.com/f8d173a9-ef09-43f5-bbb1-f179a5ed06ae%2Fnancy.jpg?v=1563664730583";
} else if ((zip >= 94605 && zip <= 94622) || (zip >= 94701 && zip <= 94710)){
    document.getElementById("p").innerHTML = "District 13; Barbara Lee";
    document.getElementById("p1").innerHTML = "ph: (202) 225-2661, fax: (202) 225-9817";
    document.getElementById("p4").src = "https://cdn.glitch.com/f8d173a9-ef09-43f5-bbb1-f179a5ed06ae%2Fbarbara.jpg?v=1563664903938";
} else if ((zip >= 94014 && zip <= 94019) || (zip >= 94061 && zip <= 94066)){
    document.getElementById("p").innerHTML = "District 14; Jackie Speier";
    document.getElementById("p1").innerHTML = "ph: (202) 225-3531, fax: (202) 225-4183";
    document.getElementById("p4").src = "https://cdn.glitch.com/f8d173a9-ef09-43f5-bbb1-f179a5ed06ae%2Fjackie.jpg?v=1563664950393";
} else if (zip >= 94539 && zip <= 94546){
    document.getElementById("p").innerHTML = "District 15; Eric Swalwell";
    document.getElementById("p1").innerHTML = "ph: (925) 460-5100, fax: (925) 460-5320";
    document.getElementById("p4").src = "https://cdn.glitch.com/f8d173a9-ef09-43f5-bbb1-f179a5ed06ae%2Feric.jpg?v=1563665002440";
}else if (zip >= 95126 && zip <= 95129 || zip == 95070 || (zip >= 95050 && zip <= 95055) || (zip == 95035)){
    document.getElementById("p").innerHTML = "District 17; Ro Khanna";
    document.getElementById("p1").innerHTML = "ph: (202) 225-2631, fax: (202) 225-2699";
    document.getElementById("p4").src = "https://cdn.glitch.com/f8d173a9-ef09-43f5-bbb1-f179a5ed06ae%2Fro.jpg?v=1563664063269";
}else if (zip >= 94039 && zip <= 94043 || (zip >= 94019 && zip <= 94028) || zip >= 95030 && zip <= 95033){
    document.getElementById("p").innerHTML = "District 18; Anna Eshoo";
    document.getElementById("p1").innerHTML = "ph: (202) 225-8104, fax: (202) 225-8890";
    document.getElementById("p4").src = "https://cdn.glitch.com/f8d173a9-ef09-43f5-bbb1-f179a5ed06ae%2Fanna.jpg?v=1563665042020";
}else if (zip >= 95018 && zip <= 95028){
    document.getElementById("p").innerHTML = "District 19; Zoe Lofgren"
    document.getElementById("p1").innerHTML = "ph: (202) 225-3072, fax: (202) 225-3336"
    document.getElementById("p4").src = "https://cdn.glitch.com/f8d173a9-ef09-43f5-bbb1-f179a5ed06ae%2Fzoe.png?v=1563665169453";
}else if (zip >= 90209 && zip <= 90213 || zip == 90035){
    document.getElementById("p").innerHTML = "District 33; Ted Lieu"
    document.getElementById("p1").innerHTML = "ph: (202) 225-3976, fax: (202) 225-4099"
    document.getElementById("p4").src = "https://cdn.glitch.com/f8d173a9-ef09-43f5-bbb1-f179a5ed06ae%2Fted.jpg?v=1563667641123";
}else {
    document.getElementById("p").innerHTML = "Invalid zipcode.  Please click the button to try again.";
  }
}