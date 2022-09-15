var AWS = require("aws-sdk");
const {format} = require("date-fns"); 


AWS.config.update({
  region: "us-east-1"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "dado_lido";

async function salvar(ultimoDadoLido)
{
    var params
    if(ultimoDadoLido.MOT_ID == undefined || ultimoDadoLido.MOT_ID == null || ultimoDadoLido.MOT_ID == 0){
        params = {
            TableName:table,
            Item:{
                "VEI_ID"    : ultimoDadoLido.VEI_ID ,
                "DDL_DH"    : format(add3Hours(ultimoDadoLido.UDL_DH), "yyyy-MM-dd HH:mm:ss"),
                "DDL_BYT1"  : ultimoDadoLido.UDL_BYT1 ,
                "DDL_BYT2"  : ultimoDadoLido.UDL_BYT2 ,
                "DDL_CSM"   : ultimoDadoLido.UDL_CSM ,
                "DDL_CTM"   : ultimoDadoLido.UDL_CTM ,
                "DDL_DHS"   : format(ultimoDadoLido.UDL_DHS, "yyyy-MM-dd HH:mm:ss"),
                "DDL_DIR"   : ultimoDadoLido.UDL_DIR ,
                "DDL_HRM"   : ultimoDadoLido.UDL_HRM ,
                "DDL_LAT"   : ultimoDadoLido.UDL_LAT ,
                "DDL_LNG"   : ultimoDadoLido.UDL_LNG ,
                "DDL_MOD"   : ultimoDadoLido.UDL_MOD ,
                "DDL_ODM"   : ultimoDadoLido.UDL_ODM ,
                "DDL_TEN"   : ultimoDadoLido.UDL_TEN ,
                "DDL_VEL"   : ultimoDadoLido.UDL_VEL ,
                "DDL_RPM"   : ultimoDadoLido.UDL_RPM
            }
        }
    }else{
        params = {
            TableName:table,
            Item:{
                "VEI_ID"    : ultimoDadoLido.VEI_ID ,
                "DDL_DH"    : format(add3Hours(ultimoDadoLido.UDL_DH), "yyyy-MM-dd HH:mm:ss"),
                "DDL_BYT1"  : ultimoDadoLido.UDL_BYT1 ,
                "DDL_BYT2"  : ultimoDadoLido.UDL_BYT2 ,
                "DDL_CSM"   : ultimoDadoLido.UDL_CSM ,
                "DDL_CTM"   : ultimoDadoLido.UDL_CTM ,
                "DDL_DHS"   : format(ultimoDadoLido.UDL_DHS, "yyyy-MM-dd HH:mm:ss"),
                "DDL_DIR"   : ultimoDadoLido.UDL_DIR ,
                "DDL_HRM"   : ultimoDadoLido.UDL_HRM ,
                "DDL_LAT"   : ultimoDadoLido.UDL_LAT ,
                "DDL_LNG"   : ultimoDadoLido.UDL_LNG ,
                "DDL_MOD"   : ultimoDadoLido.UDL_MOD ,
                "DDL_ODM"   : ultimoDadoLido.UDL_ODM ,
                "DDL_TEN"   : ultimoDadoLido.UDL_TEN ,
                "DDL_VEL"   : ultimoDadoLido.UDL_VEL,
                "DDL_RPM"   : ultimoDadoLido.UDL_RPM,
                "MOT_ID"    : ultimoDadoLido.MOT_ID
            }
        }
    }
        
    docClient.put(params, function(err, data) 
    {
        if (err) 
        {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else 
        {
            console.log(`${format(add3Hours(ultimoDadoLido.UDL_DH), "yyyy-MM-dd HH:mm:ss")} - Serial -> ${ultimoDadoLido.UDL_MOD}, Dado lido atulizado com sucesso`);
        }
    });
};
function add3Hours(data){
    const time = new Date(data)
    time.setHours(time.getHours() + 3)
    return time
}

module.exports.salvar = salvar

