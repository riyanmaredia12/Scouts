function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,Best eleven xl,Shafeen Aslam,1848\n2,Wizards Of Wickets ,Raheen Ikram shah,1563\n3,Trend Changers,Shahnil Iqbal,1534\n4,Noble Rajans,Muneer Didarali Rajan,1454\n5,444,Shazeen Sherzad,1423\n6,Super xl,Shafeen,1417\n7,Elite Warriors ,Asad,1404\n8,The Winning Team,Sarim Ali Meghani,1385\n9,Liverpool,Ezaan Sikander,1368\n10,Star boys ,shaayaan shmasuddin,1350\n11,Dream 11,Shaheer Ahmed,1342\n12,Elegant Eleven ,Saima Nadir,1337\n13, Fierce Fighters,Navroz Vadsaria,1336\n14,Velocity XI,Sahil Naseer,1327\n15,Meerayy Underdogs,Sameer Vadsariya,1293\n16,Royal Rajans,Imaad Amyn Rajan,1237\n17,Armaan XI,Armaan Punjwani,1195\n18,World best xl,Shafeen Aslam,1194\n19,W-11,Ubaid Ali,1180\n20,Azzy 11,Azim Ali,1171\n21,Jetha kay jhabaz,Aadil nasir,1170\n22,Team Darky,Sharoon Sherzad,1161\n23,321 pillay,Aariz Aziz,1156\n24,All around the world 11,Ayaan kashif,1151\n25,UK X1,Nadeem,1136\n26,SVxKaku11,Karim Ismail,1133\n27,KhowajaX11,Alnoor nizar,1125\n27,SMS legends,Salman Mukhtiar,1125\n29,Balig Xl,Balig Barkat Ali,1118\n30,Chilka11 ,Karim Mehboob,1106\n31,CA Ke Balley,Noman Vadsariya,1102\n32,Wolf XI,Sarfaraz S. Vadsariya,1092\n33,All Stars,Aashir Rahim,1082\n34,Hayat,Moiz Hayat,1081\n35,The Thundering Titans,Arsh Maknojia,1080\n36,ALLIES,Nausher Rahim,1076\n37,Koko x1,Shafeen aslam,1070\n38,Gaitonde 11,Maisum,1046\n39,xD XI,Naveed Hakim,1045\n40,Prosperous Legends ,Affan Nadir,1013\n41,Titans xl,Shafeen Aslam,1009\n42,hyakkimaru11,Aly Shah Nizar,982\n43,Pana Tipu,Riyan maredia,976\n44,Pinocchios,Sarfaraz S. Vadsariya,975\n45,Hit and Run XI,Shahzad Vadsariya,946\n46,Panda Warriors,Shahnil Iqbal,945\n47,4 cut Atmaram,Riyan maredia,942\n48,Lion xl,Shafeen Aslam,927\n48,SAROSH XI,Sarosh Sher Ali,927\n50,Ali 11,Ali Muhammad Murad,924\n50,Rameez_raja11,Mirsab Malik,924\n52,Marco polo culb,Hubb-i-Ali,920\n53,Aahil\'s XI,Aahil Aziz,915\n54,World 11,Ali Mohammed,899\n55,The real OG,Sahra Iqbal,871\n55,Maaz 11,Maaz Khalid,871\n57,CricFlicks XI,Aman Hassan Vadsariya,866\n58,Ayyan fighters,Ayyan Noushad Solanki,865\n59,Sami falcons ,Sameer Noorddin,810\n60,Scared Shotless,hassan kirmani,807\n61,The Pi - Guys,Moiz Ali,801\n62,Balig Gladiators ,Balig Barkat Ali,792\n63,Amnn Shaheens,Amnn Ajaz,771\n64,Mighty lions,Ali nawaz,715\n65,AJ XI,Ammad Jamil,698\n66,The Elites,Navroz Vadsaria,691\n67,GOALDIGGERS 11,Ali Shah Kamruddin,651\n68,Dororo11,Aly Shah Nizar,614\n69,Maxi 11,Azim Ali,595\n70,Shaheens X1,Haris Hanif Dinani,504'

const array = csvToArray(csvString);
array.reverse()
array.pop()
array.reverse()
console.log(array);


function displayTeams() {
    const resultTable = document.getElementById('resultTable');

    array.forEach((team) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${team[0]}</td>
            <td>${team[1]}</td>
            <td>${team[2]}</td>
            <td>${team[3]}</td>
        `;
        resultTable.appendChild(row);
    });
}

window.onload = displayTeams;

document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector("body");
    body.classList.add("animate");
});

