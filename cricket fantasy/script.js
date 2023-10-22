function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,Jetha kay jhabaz,Aadil nasir,3035\n2,Armaan XI,Armaan Punjwani,2995\n3,Star boys ,shaayaan shmasuddin,2954\n4,Noble Rajans,Muneer Didarali Rajan,2923\n5,Trend Changers,Shahnil Iqbal,2895\n6,444,Shazeen Sherzad,2811\n7,Elegant Eleven ,Saima Nadir,2808\n8,Meerayy Underdogs,Sameer Vadsariya,2777\n9,The Winning Team,Sarim Ali Meghani,2765\n10,The Thundering Titans,Arsh Maknojia,2721\n11,Best eleven xl,Shafeen Aslam,2709\n11,Super xl,Shafeen,2709\n13,SMS legends,Salman Mukhtiar,2691\n14,Dream 11,Shaheer Ahmed,2658\n15,W-11,Ubaid Ali,2602\n16,Velocity XI,Sahil Naseer,2598\n17,Wizards Of Wickets ,Raheen Ikram shah,2576\n18,Royal Rajans,Imaad Amyn Rajan,2561\n19,CA Ke Balley,Noman Vadsariya,2517\n20,Balig Xl,Balig Barkat Ali,2507\n21,World best xl,Shafeen Aslam,2491\n22,All Stars,Aashir Rahim,2490\n23,Hayat,Moiz Hayat,2488\n24,Azzy 11,Azim Ali,2448\n25,Koko x1,Shafeen aslam,2447\n26,All around the world 11,Ayaan kashif,2428\n27,Hit and Run XI,Shahzad Vadsariya,2409\n28,Elite Warriors ,Asad,2402\n29,KhowajaX11,Alnoor nizar,2399\n30,Liverpool,Ezaan Sikander,2363\n31,ALLIES,Nausher Rahim,2361\n32,UK X1,Nadeem,2347\n33, Fierce Fighters,Navroz Vadsaria,2311\n34,xD XI,Naveed Hakim,2304\n35,Wolf XI,Sarfaraz S. Vadsariya,2245\n36,World 11,Ali Mohammed,2231\n37,Dororo11,Aly Shah Nizar,2207\n38,4 cut Atmaram,Riyan maredia,2182\n39,Scared Shotless,hassan kirmani,2154\n40,Gaitonde 11,Maisum,2144\n41,321 pillay,Aariz Aziz,2133\n42,Chilka11 ,Karim Mehboob,2130\n43,Marco polo culb,Hubb-i-Ali,2121\n44,SVxKaku11,Karim Ismail,2100\n45,Amnn Shaheens,Amnn Ajaz,2098\n46,The Elites,Navroz Vadsaria,2066\n47,Panda Warriors,Shahnil Iqbal,2054\n47,Rameez_raja11,Mirsab Malik,2054\n49,Team Darky,Sharoon Sherzad,2047\n50,Ayyan fighters,Ayyan Noushad Solanki,2037\n51,The Pi - Guys,Moiz Ali,2001\n52,Maaz 11,Maaz Khalid,1998\n53,The real OG,Sahra Iqbal,1996\n54,Ali 11,Ali Muhammad Murad,1994\n55,Balig Gladiators ,Balig Barkat Ali,1988\n56,Titans xl,Shafeen Aslam,1911\n57,SAROSH XI,Sarosh Sher Ali,1895\n58,Pana Tipu,Riyan maredia,1891\n59,Sami falcons ,Sameer Noorddin,1838\n60,Lion xl,Shafeen Aslam,1837\n61,Aahil\'s XI,Aahil Aziz,1814\n62,Prosperous Legends ,Affan Nadir,1812\n63,Maxi 11,Azim Ali,1803\n64,hyakkimaru11,Aly Shah Nizar,1735\n65,CricFlicks XI,Aman Hassan Vadsariya,1701\n66,Mighty lions,Ali nawaz,1691\n67,Pinocchios,Sarfaraz S. Vadsariya,1674\n68,GOALDIGGERS 11,Ali Shah Kamruddin,1584\n69,AJ XI,Ammad Jamil,1489\n70,Shaheens X1,Haris Hanif Dinani,1277'
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

