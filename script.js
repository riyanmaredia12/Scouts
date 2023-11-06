function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,444,Shazeen Sherzad,5459\n2,Jetha kay jhabaz,Aadil nasir,5370\n3,SMS legends,Salman Mukhtiar,5172\n4,Elegant Eleven ,Saima Nadir,5000\n5,Armaan XI,Armaan Punjwani,4942\n6,Noble Rajans,Muneer Didarali Rajan,4940\n7,The Thundering Titans,Arsh Maknojia,4927\n8,Star boys ,shaayaan shmasuddin,4842\n9,Hayat,Moiz Hayat,4821\n10,KhowajaX11,Alnoor nizar,4692\n11,All around the world 11,Ayaan kashif,4683\n12,The Winning Team,Sarim Ali Meghani,4643\n13,W-11,Ubaid Ali,4625\n14,Dream 11,Shaheer Ahmed,4612\n15,Super xl,Shafeen,4561\n16,Royal Rajans,Imaad Amyn Rajan,4538\n17,World 11,Ali Mohammed,4529\n18,Meerayy Underdogs,Sameer Vadsariya,4499\n19,The Elites,Navroz Vadsaria,4445\n20,All Stars,Aashir Rahim,4375\n21,Maaz 11,Maaz Khalid,4338\n22,Azzy 11,Azim Ali,4329\n23,Trend Changers,Shahnil Iqbal,4301\n24,Koko x1,Shafeen aslam,4299\n25,ALLIES,Nausher Rahim,4291\n26,Lion xl,Shafeen Aslam,4280\n27,4 cut Atmaram,Riyan maredia,4277\n28,Balig Xl,Balig Barkat Ali,4275\n29,The real OG,Sahra Iqbal,4274\n30,Hit and Run XI,Shahzad Vadsariya,4254\n31,Liverpool,Ezaan Sikander,4237\n32,Wizards Of Wickets ,Raheen Ikram shah,4127\n33,Scared Shotless,hassan kirmani,4121\n34,Best eleven xl,Shafeen Aslam,4113\n35,Rameez_raja11,Mirsab Malik,4099\n36,Gaitonde 11,Maisum,4091\n37,SVxKaku11,Karim Ismail,4088\n38,321 pillay,Aariz Aziz,4068\n39,Velocity XI,Sahil Naseer,4050\n40,xD XI,Naveed Hakim,4045\n41,The Pi - Guys,Moiz Ali,4026\n42,Ayyan fighters,Ayyan Noushad Solanki,4015\n42,SAROSH XI,Sarosh Sher Ali,4015\n44,Team Darky,Sharoon Sherzad,4009\n45,Ali 11,Ali Muhammad Murad,3977\n46,Elite Warriors ,Asad,3974\n47,Marco polo culb,Hubb-i-Ali,3942\n48,Panda Warriors,Shahnil Iqbal,3910\n49, Fierce Fighters,Navroz Vadsaria,3895\n50,CA Ke Balley,Noman Vadsariya,3889\n51,Mighty lions,Ali nawaz,3871\n52,World best xl,Shafeen Aslam,3862\n53,UK X1,Nadeem,3819\n54,Amnn Shaheens,Amnn Ajaz,3795\n55,Dororo11,Aly Shah Nizar,3789\n56,CricFlicks XI,Aman Hassan Vadsariya,3781\n57,Balig Gladiators ,Balig Barkat Ali,3759\n58,Wolf XI,Sarfaraz S. Vadsariya,3757\n59,Sami falcons ,Sameer Noorddin,3752\n60,Prosperous Legends ,Affan Nadir,3735\n61,Pana Tipu,Riyan maredia,3556\n62,Maxi 11,Azim Ali,3397\n63,GOALDIGGERS 11,Ali Shah Kamruddin,3338\n64,AJ XI,Ammad Jamil,3314\n65,Titans xl,Shafeen Aslam,3284\n66,Aahil\'s XI,Aahil Aziz,3263\n67,Chilka11 ,Karim Mehboob,3183\n68,Pinocchios,Sarfaraz S. Vadsariya,3080\n69,hyakkimaru11,Aly Shah Nizar,3042\n70,Shaheens X1,Haris Hanif Dinani,2759'
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

