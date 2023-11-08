function csvToArray(csv) {
    const rows = csv.split('\n');
    const result = [];
  
    for (const row of rows) {
      const values = row.split(',');
      result.push(values);
    }
  
    return result;
}

const csvString = 'STANDINGS,TEAMS,TEAM OWNER,FANTASY POINTS \n1,444,Shazeen Sherzad,5873\n2,Jetha kay jhabaz,Aadil nasir,5637\n3,SMS legends,Salman Mukhtiar,5444\n4,Noble Rajans,Muneer Didarali Rajan,5282\n5,All around the world 11,Ayaan kashif,5250\n6,The Winning Team,Sarim Ali Meghani,5147\n7,Hayat,Moiz Hayat,5144\n8,Armaan XI,Armaan Punjwani,5069\n9,Star boys ,shaayaan shmasuddin,5027\n10,Elegant Eleven ,Saima Nadir,5013\n11,Super xl,Shafeen,4971\n12,The Thundering Titans,Arsh Maknojia,4969\n13,Azzy 11,Azim Ali,4812\n14,Rameez_raja11,Mirsab Malik,4797\n15,KhowajaX11,Alnoor nizar,4773\n16,Royal Rajans,Imaad Amyn Rajan,4768\n17,Balig Xl,Balig Barkat Ali,4757\n18,W-11,Ubaid Ali,4740\n19,Team Darky,Sharoon Sherzad,4733\n20,Maaz 11,Maaz Khalid,4724\n21,Dream 11,Shaheer Ahmed,4680\n22,The real OG,Sahra Iqbal,4672\n22,World 11,Ali Mohammed,4672\n24,4 cut Atmaram,Riyan maredia,4633\n25,Liverpool,Ezaan Sikander,4614\n26,The Elites,Navroz Vadsaria,4608\n27,Meerayy Underdogs,Sameer Vadsariya,4602\n28,Trend Changers,Shahnil Iqbal,4594\n29,Panda Warriors,Shahnil Iqbal,4592\n30,321 pillay,Aariz Aziz,4571\n31,SAROSH XI,Sarosh Sher Ali,4525\n32,Ayyan fighters,Ayyan Noushad Solanki,4507\n33,Koko x1,Shafeen aslam,4494\n34,ALLIES,Nausher Rahim,4488\n35,Ali 11,Ali Muhammad Murad,4483\n36,Prosperous Legends ,Affan Nadir,4465\n37,All Stars,Aashir Rahim,4417\n38,Lion xl,Shafeen Aslam,4409\n39,Sami falcons ,Sameer Noorddin,4394\n40,Hit and Run XI,Shahzad Vadsariya,4393\n41,The Pi - Guys,Moiz Ali,4353\n42,Velocity XI,Sahil Naseer,4339\n43,Marco polo culb,Hubb-i-Ali,4291\n44,Best eleven xl,Shafeen Aslam,4284\n45,Gaitonde 11,Maisum,4276\n46,Wizards Of Wickets ,Raheen Ikram shah,4223\n47,CricFlicks XI,Aman Hassan Vadsariya,4205\n48,Elite Warriors ,Asad,4199\n49,SVxKaku11,Karim Ismail,4183\n50,Scared Shotless,hassan kirmani,4175\n51, Fierce Fighters,Navroz Vadsaria,4141\n52,CA Ke Balley,Noman Vadsariya,4096\n53,Mighty lions,Ali nawaz,4076\n54,xD XI,Naveed Hakim,4057\n55,Dororo11,Aly Shah Nizar,4056\n56,Amnn Shaheens,Amnn Ajaz,4017\n57,UK X1,Nadeem,4011\n58,Wolf XI,Sarfaraz S. Vadsariya,3981\n59,World best xl,Shafeen Aslam,3967\n60,Pana Tipu,Riyan maredia,3905\n61,Balig Gladiators ,Balig Barkat Ali,3803\n62,Maxi 11,Azim Ali,3782\n63,Chilka11 ,Karim Mehboob,3651\n64,AJ XI,Ammad Jamil,3600\n65,Titans xl,Shafeen Aslam,3485\n66,GOALDIGGERS 11,Ali Shah Kamruddin,3459\n67,Aahil\'s XI,Aahil Aziz,3457\n68,hyakkimaru11,Aly Shah Nizar,3361\n69,Pinocchios,Sarfaraz S. Vadsariya,3197\n70,Shaheens X1,Haris Hanif Dinani,3073'
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

