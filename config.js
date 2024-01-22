var vendorIpAddress = "10.10.10.250"; //put here the default selected address

//list here all node mcu address for multi vendo setup
var multiVendoAddresses = [
 {
    vendoIp: "10.10.10.250", //change accordingly to your vendo ip
    interfaceName: "vlan1", // hotspot interface name preser
  },
  {
    vendoIp: "10.10.11.250", //change accordingly to your vendo ip
    interfaceName: "vlan2", // hotspot interface name preser
  },
  {
    vendoIp: "10.10.12.250", //change accordingly to your vendo ip
    interfaceName: "vlan3", // hotspot interface name preser
  },
  {
    vendoIp: "10.10.13.250", //change accordingly to your vendo ip
    interfaceName: "vlan4", // hotspot interface name preser
  },
  
];

for (var i = 0; i < multiVendoAddresses.length; i++) {
  var currentInterfaceName = interfaceName;
  if (multiVendoAddresses[i].interfaceName == currentInterfaceName) {
    vendorIpAddress = multiVendoAddresses[i].vendoIp;
  }
}

document.getElementById("banner").innerHTML = "COBELO PISOWIFI";
document.getElementById("banner").style.fontSize = "30px";