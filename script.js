function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,SMS legends,Salman Mukhtiar,3398\n2,Armaan XI,Armaan Punjwani,3391\n3,Noble Rajans,Muneer Didarali Rajan,3372\n4,Star boys ,shaayaan shmasuddin,3270\n5,Jetha kay jhabaz,Aadil nasir,3258\n6,The Winning Team,Sarim Ali Meghani,3201\n7,444,Shazeen Sherzad,3170\n8,Trend Changers,Shahnil Iqbal,3136\n9,Meerayy Underdogs,Sameer Vadsariya,3123\n10,Super xl,Shafeen,3122\n11,Balig Xl,Balig Barkat Ali,3062\n12,Elegant Eleven ,Saima Nadir,3022\n13,The Thundering Titans,Arsh Maknojia,3013\n13,Hayat,Moiz Hayat,3013\n15,Best eleven xl,Shafeen Aslam,2978\n16,Royal Rajans,Imaad Amyn Rajan,2918\n17,W-11,Ubaid Ali,2917\n17,Dream 11,Shaheer Ahmed,2917\n19,Velocity XI,Sahil Naseer,2916\n20,Koko x1,Shafeen aslam,2890\n21,SVxKaku11,Karim Ismail,2876\n22,Azzy 11,Azim Ali,2866\n23,All around the world 11,Ayaan kashif,2865\n24,Wizards Of Wickets ,Raheen Ikram shah,2863\n25,ALLIES,Nausher Rahim,2856\n26,World 11,Ali Mohammed,2821\n27,Hit and Run XI,Shahzad Vadsariya,2810\n28,Liverpool,Ezaan Sikander,2792\n29,Elite Warriors ,Asad,2790\n30,CA Ke Balley,Noman Vadsariya,2759\n31,All Stars,Aashir Rahim,2708\n32,Panda Warriors,Shahnil Iqbal,2705\n33,Dororo11,Aly Shah Nizar,2664\n34,4 cut Atmaram,Riyan maredia,2659\n35,KhowajaX11,Alnoor nizar,2654\n36,Gaitonde 11,Maisum,2630\n37,Wolf XI,Sarfaraz S. Vadsariya,2603\n38,Ayyan fighters,Ayyan Noushad Solanki,2600\n38,UK X1,Nadeem,2600\n40,World best xl,Shafeen Aslam,2587\n41,Team Darky,Sharoon Sherzad,2585\n42,Maaz 11,Maaz Khalid,2567\n43,Scared Shotless,hassan kirmani,2544\n44,Amnn Shaheens,Amnn Ajaz,2517\n45,Rameez_raja11,Mirsab Malik,2500\n46,Marco polo culb,Hubb-i-Ali,2457\n46,321 pillay,Aariz Aziz,2457\n48, Fierce Fighters,Navroz Vadsaria,2455\n49,xD XI,Naveed Hakim,2447\n50,Sami falcons ,Sameer Noorddin,2433\n50,Balig Gladiators ,Balig Barkat Ali,2433\n52,The real OG,Sahra Iqbal,2431\n53,The Pi - Guys,Moiz Ali,2422\n54,Ali 11,Ali Muhammad Murad,2408\n55,Chilka11 ,Karim Mehboob,2406\n56,SAROSH XI,Sarosh Sher Ali,2402\n57,The Elites,Navroz Vadsaria,2374\n58,Pana Tipu,Riyan maredia,2250\n59,Prosperous Legends ,Affan Nadir,2234\n60,Lion xl,Shafeen Aslam,2211\n61,Mighty lions,Ali nawaz,2172\n62,Maxi 11,Azim Ali,2171\n63,CricFlicks XI,Aman Hassan Vadsariya,2133\n64,Titans xl,Shafeen Aslam,2081\n65,Aahil\'s XI,Aahil Aziz,2075\n66,hyakkimaru11,Aly Shah Nizar,2044\n67,Pinocchios,Sarfaraz S. Vadsariya,2005\n68,GOALDIGGERS 11,Ali Shah Kamruddin,1938\n69,AJ XI,Ammad Jamil,1742\n70,Shaheens X1,Haris Hanif Dinani,1645'
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

