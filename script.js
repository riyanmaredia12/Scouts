function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,SMS legends,Salman Mukhtiar,4050\n2,Armaan XI,Armaan Punjwani,4036\n3,Noble Rajans,Muneer Didarali Rajan,3934\n4,Hayat,Moiz Hayat,3882\n5,Star boys ,shaayaan shmasuddin,3741\n6,Super xl,Shafeen,3724\n7,444,Shazeen Sherzad,3666\n8,The Winning Team,Sarim Ali Meghani,3612\n9,W-11,Ubaid Ali,3560\n10,The Thundering Titans,Arsh Maknojia,3511\n11,Meerayy Underdogs,Sameer Vadsariya,3508\n12,Balig Xl,Balig Barkat Ali,3501\n13,Elegant Eleven ,Saima Nadir,3481\n14,Royal Rajans,Imaad Amyn Rajan,3447\n15,Trend Changers,Shahnil Iqbal,3439\n16,Velocity XI,Sahil Naseer,3429\n17,Jetha kay jhabaz,Aadil nasir,3426\n18,ALLIES,Nausher Rahim,3410\n19,Wizards Of Wickets ,Raheen Ikram shah,3399\n20,Dream 11,Shaheer Ahmed,3392\n21,Elite Warriors ,Asad,3380\n22,Hit and Run XI,Shahzad Vadsariya,3365\n23,SVxKaku11,Karim Ismail,3349\n24,Best eleven xl,Shafeen Aslam,3338\n25,All Stars,Aashir Rahim,3293\n26,Azzy 11,Azim Ali,3282\n27,Liverpool,Ezaan Sikander,3270\n28,World 11,Ali Mohammed,3256\n29,Ayyan fighters,Ayyan Noushad Solanki,3193\n30,Maaz 11,Maaz Khalid,3185\n31,Panda Warriors,Shahnil Iqbal,3183\n32,Koko x1,Shafeen aslam,3154\n33,4 cut Atmaram,Riyan maredia,3130\n34,All around the world 11,Ayaan kashif,3097\n35,321 pillay,Aariz Aziz,3049\n36,Dororo11,Aly Shah Nizar,3031\n37,KhowajaX11,Alnoor nizar,3026\n38,Gaitonde 11,Maisum,2998\n39,World best xl,Shafeen Aslam,2965\n40,Wolf XI,Sarfaraz S. Vadsariya,2944\n41,CA Ke Balley,Noman Vadsariya,2939\n42,Team Darky,Sharoon Sherzad,2932\n43,Amnn Shaheens,Amnn Ajaz,2913\n44,SAROSH XI,Sarosh Sher Ali,2905\n45, Fierce Fighters,Navroz Vadsaria,2871\n46,The Pi - Guys,Moiz Ali,2870\n47,The real OG,Sahra Iqbal,2864\n48,The Elites,Navroz Vadsaria,2829\n49,Scared Shotless,hassan kirmani,2826\n50,Balig Gladiators ,Balig Barkat Ali,2821\n51,UK X1,Nadeem,2813\n52,Ali 11,Ali Muhammad Murad,2782\n53,Rameez_raja11,Mirsab Malik,2774\n54,Marco polo culb,Hubb-i-Ali,2770\n55,Sami falcons ,Sameer Noorddin,2745\n56,Chilka11 ,Karim Mehboob,2739\n57,xD XI,Naveed Hakim,2700\n58,CricFlicks XI,Aman Hassan Vadsariya,2653\n59,Lion xl,Shafeen Aslam,2602\n60,Mighty lions,Ali nawaz,2567\n61,Prosperous Legends ,Affan Nadir,2498\n62,Titans xl,Shafeen Aslam,2447\n63,Maxi 11,Azim Ali,2437\n64,hyakkimaru11,Aly Shah Nizar,2387\n65,Pinocchios,Sarfaraz S. Vadsariya,2363\n66,Pana Tipu,Riyan maredia,2343\n67,GOALDIGGERS 11,Ali Shah Kamruddin,2193\n68,Aahil\'s XI,Aahil Aziz,2191\n69,Shaheens X1,Haris Hanif Dinani,1947\n70,AJ XI,Ammad Jamil,1896'
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

