function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,444,Shazeen Sherzad,5792\n2,Jetha kay jhabaz,Aadil nasir,5415\n3,SMS legends,Salman Mukhtiar,5268\n4,Hayat,Moiz Hayat,5144\n5,Noble Rajans,Muneer Didarali Rajan,5069\n6,Armaan XI,Armaan Punjwani,5061\n7,Elegant Eleven ,Saima Nadir,5013\n8,The Winning Team,Sarim Ali Meghani,4992\n9,All around the world 11,Ayaan kashif,4990\n10,The Thundering Titans,Arsh Maknojia,4969\n11,Super xl,Shafeen,4947\n12,Star boys ,shaayaan shmasuddin,4884\n13,KhowajaX11,Alnoor nizar,4773\n14,W-11,Ubaid Ali,4728\n15,Maaz 11,Maaz Khalid,4724\n16,Dream 11,Shaheer Ahmed,4680\n17,Azzy 11,Azim Ali,4678\n18,Royal Rajans,Imaad Amyn Rajan,4677\n19,Balig Xl,Balig Barkat Ali,4614\n20,4 cut Atmaram,Riyan maredia,4613\n21,The real OG,Sahra Iqbal,4581\n22,Panda Warriors,Shahnil Iqbal,4580\n23,Liverpool,Ezaan Sikander,4574\n24,Meerayy Underdogs,Sameer Vadsariya,4542\n25,World 11,Ali Mohammed,4529\n26,The Elites,Navroz Vadsaria,4465\n27,Rameez_raja11,Mirsab Malik,4432\n28,All Stars,Aashir Rahim,4417\n29,ALLIES,Nausher Rahim,4403\n30,Hit and Run XI,Shahzad Vadsariya,4393\n31,321 pillay,Aariz Aziz,4388\n32,Trend Changers,Shahnil Iqbal,4371\n33,Ayyan fighters,Ayyan Noushad Solanki,4364\n34,Koko x1,Shafeen aslam,4360\n35,SAROSH XI,Sarosh Sher Ali,4342\n35,Team Darky,Sharoon Sherzad,4342\n37,The Pi - Guys,Moiz Ali,4333\n38,Lion xl,Shafeen Aslam,4304\n39,Ali 11,Ali Muhammad Murad,4300\n40,Velocity XI,Sahil Naseer,4205\n41,Wizards Of Wickets ,Raheen Ikram shah,4183\n42,Scared Shotless,hassan kirmani,4163\n43,Best eleven xl,Shafeen Aslam,4150\n44,Gaitonde 11,Maisum,4133\n45,CricFlicks XI,Aman Hassan Vadsariya,4114\n46,SVxKaku11,Karim Ismail,4104\n47,Sami falcons ,Sameer Noorddin,4088\n48,xD XI,Naveed Hakim,4057\n49,Prosperous Legends ,Affan Nadir,4042\n50,Elite Warriors ,Asad,4016\n51,Marco polo culb,Hubb-i-Ali,4005\n51,CA Ke Balley,Noman Vadsariya,4005\n53, Fierce Fighters,Navroz Vadsaria,3958\n54,Amnn Shaheens,Amnn Ajaz,3926\n55,UK X1,Nadeem,3920\n56,Mighty lions,Ali nawaz,3913\n56,Dororo11,Aly Shah Nizar,3913\n58,Pana Tipu,Riyan maredia,3881\n59,World best xl,Shafeen Aslam,3880\n60,Wolf XI,Sarfaraz S. Vadsariya,3818\n61,Balig Gladiators ,Balig Barkat Ali,3803\n62,Maxi 11,Azim Ali,3505\n63,Chilka11 ,Karim Mehboob,3438\n64,GOALDIGGERS 11,Ali Shah Kamruddin,3368\n65,hyakkimaru11,Aly Shah Nizar,3349\n66,Titans xl,Shafeen Aslam,3342\n67,AJ XI,Ammad Jamil,3314\n68,Aahil\'s XI,Aahil Aziz,3274\n69,Pinocchios,Sarfaraz S. Vadsariya,3106\n70,Shaheens X1,Haris Hanif Dinani,2775'
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

