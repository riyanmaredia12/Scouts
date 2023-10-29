function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,SMS legends,Salman Mukhtiar,4144\n2,Armaan XI,Armaan Punjwani,4080\n3,Noble Rajans,Muneer Didarali Rajan,4024\n4,Hayat,Moiz Hayat,4012\n5,Star boys ,shaayaan shmasuddin,3829\n6,The Winning Team,Sarim Ali Meghani,3791\n7,444,Shazeen Sherzad,3781\n7,W-11,Ubaid Ali,3781\n9,Super xl,Shafeen,3726\n10,Meerayy Underdogs,Sameer Vadsariya,3725\n11,Wizards Of Wickets ,Raheen Ikram shah,3658\n12,Trend Changers,Shahnil Iqbal,3649\n13,Balig Xl,Balig Barkat Ali,3631\n14,Elegant Eleven ,Saima Nadir,3579\n15,Jetha kay jhabaz,Aadil nasir,3577\n16,Velocity XI,Sahil Naseer,3564\n17,All around the world 11,Ayaan kashif,3553\n18,World best xl,Shafeen Aslam,3552\n19,World 11,Ali Mohammed,3534\n20,Royal Rajans,Imaad Amyn Rajan,3529\n21,Hit and Run XI,Shahzad Vadsariya,3495\n22,The Thundering Titans,Arsh Maknojia,3489\n23,Best eleven xl,Shafeen Aslam,3473\n24,SVxKaku11,Karim Ismail,3448\n25,ALLIES,Nausher Rahim,3430\n26,Liverpool,Ezaan Sikander,3426\n27,Elite Warriors ,Asad,3416\n28,Dream 11,Shaheer Ahmed,3396\n29,Azzy 11,Azim Ali,3351\n30,Ayyan fighters,Ayyan Noushad Solanki,3323\n31,Panda Warriors,Shahnil Iqbal,3316\n32,All Stars,Aashir Rahim,3303\n33,4 cut Atmaram,Riyan maredia,3288\n34,Maaz 11,Maaz Khalid,3269\n35,KhowajaX11,Alnoor nizar,3246\n36,Koko x1,Shafeen aslam,3168\n37,The real OG,Sahra Iqbal,3157\n38,CA Ke Balley,Noman Vadsariya,3127\n39,Ali 11,Ali Muhammad Murad,3124\n40,Wolf XI,Sarfaraz S. Vadsariya,3092\n41,The Elites,Navroz Vadsaria,3075\n42,321 pillay,Aariz Aziz,3067\n43,Dororo11,Aly Shah Nizar,3041\n44,The Pi - Guys,Moiz Ali,3028\n45,Team Darky,Sharoon Sherzad,3015\n46, Fierce Fighters,Navroz Vadsaria,3011\n47,Gaitonde 11,Maisum,3008\n48,Scared Shotless,hassan kirmani,2985\n49,Amnn Shaheens,Amnn Ajaz,2948\n50,Rameez_raja11,Mirsab Malik,2947\n51,SAROSH XI,Sarosh Sher Ali,2930\n52,UK X1,Nadeem,2907\n53,xD XI,Naveed Hakim,2825\n54,Chilka11 ,Karim Mehboob,2819\n55,Balig Gladiators ,Balig Barkat Ali,2815\n56,Mighty lions,Ali nawaz,2811\n57,Marco polo culb,Hubb-i-Ali,2764\n58,Lion xl,Shafeen Aslam,2759\n59,CricFlicks XI,Aman Hassan Vadsariya,2752\n60,Prosperous Legends ,Affan Nadir,2751\n61,Sami falcons ,Sameer Noorddin,2747\n62,Pana Tipu,Riyan maredia,2711\n63,Maxi 11,Azim Ali,2613\n64,Aahil\'s XI,Aahil Aziz,2559\n65,Titans xl,Shafeen Aslam,2457\n66,hyakkimaru11,Aly Shah Nizar,2416\n67,Pinocchios,Sarfaraz S. Vadsariya,2378\n68,GOALDIGGERS 11,Ali Shah Kamruddin,2249\n69,Shaheens X1,Haris Hanif Dinani,2007\n70,AJ XI,Ammad Jamil,1906'
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

