function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString ='STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,Best eleven xl,Shafeen Aslam,1907\n2,Trend Changers,Shahnil Iqbal,1593\n3,Wizards Of Wickets ,Raheen Ikram shah,1574\n4,444,Shazeen Sherzad,1506\n5,Liverpool,Ezaan Sikander,1485\n6,Noble Rajans,Muneer Didarali Rajan,1465\n7,Super xl,Shafeen,1461\n8,Meerayy Underdogs,Sameer Vadsariya,1432\n9,Elite Warriors ,Asad,1415\n10,Star boys ,shaayaan shmasuddin,1405\n11, Fierce Fighters,Navroz Vadsaria,1391\n12,The Winning Team,Sarim Ali Meghani,1385\n13,Dream 11,Shaheer Ahmed,1353\n14,Elegant Eleven ,Saima Nadir,1348\n15,All Stars,Aashir Rahim,1337\n16,Velocity XI,Sahil Naseer,1327\n17,Armaan XI,Armaan Punjwani,1265\n18,SMS legends,Salman Mukhtiar,1264\n19,Royal Rajans,Imaad Amyn Rajan,1263\n20,World best xl,Shafeen Aslam,1249\n21,W-11,Ubaid Ali,1235\n22,Azzy 11,Azim Ali,1230\n23,Wolf XI,Sarfaraz S. Vadsariya,1210\n24,Team Darky,Sharoon Sherzad,1203\n25,Balig Xl,Balig Barkat Ali,1198\n26,UK X1,Nadeem,1195\n27,Chilka11 ,Karim Mehboob,1188\n28,Jetha kay jhabaz,Aadil nasir,1170\n29,321 pillay,Aariz Aziz,1167\n30,All around the world 11,Ayaan kashif,1151\n31,Hayat,Moiz Hayat,1147\n32,The Thundering Titans,Arsh Maknojia,1135\n33,SVxKaku11,Karim Ismail,1133\n34,Titans xl,Shafeen Aslam,1130\n35,KhowajaX11,Alnoor nizar,1125\n36,CA Ke Balley,Noman Vadsariya,1118\n37,hyakkimaru11,Aly Shah Nizar,1100\n38,ALLIES,Nausher Rahim,1087\n39,Koko x1,Shafeen aslam,1070\n40,Gaitonde 11,Maisum,1046\n41,xD XI,Naveed Hakim,1045\n42,Prosperous Legends ,Affan Nadir,1013\n43,Panda Warriors,Shahnil Iqbal,1003\n44,Maaz 11,Maaz Khalid,985\n45,Pana Tipu,Riyan maredia,976\n46,Pinocchios,Sarfaraz S. Vadsariya,975\n46,Marco polo culb,Hubb-i-Ali,975\n48,Hit and Run XI,Shahzad Vadsariya,973\n49,The real OG,Sahra Iqbal,958\n50,4 cut Atmaram,Riyan maredia,942\n51,SAROSH XI,Sarosh Sher Ali,938\n52,CricFlicks XI,Aman Hassan Vadsariya,936\n53,Lion xl,Shafeen Aslam,927\n54,Ali 11,Ali Muhammad Murad,924\n54,Rameez_raja11,Mirsab Malik,924\n56,Scared Shotless,hassan kirmani,922\n57,Ayyan fighters,Ayyan Noushad Solanki,920\n58,Aahil\'s XI,Aahil Aziz,915\n59,AJ XI,Ammad Jamil,903\n60,World 11,Ali Mohammed,899\n61,Sami falcons ,Sameer Noorddin,897\n62,GOALDIGGERS 11,Ali Shah Kamruddin,888\n63,The Pi - Guys,Moiz Ali,856\n64,Amnn Shaheens,Amnn Ajaz,826\n65,The Elites,Navroz Vadsaria,806\n66,Balig Gladiators ,Balig Barkat Ali,792\n67,Dororo11,Aly Shah Nizar,784\n68,Mighty lions,Ali nawaz,718\n69,Maxi 11,Azim Ali,595\n70,Shaheens X1,Haris Hanif Dinani,504'
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

