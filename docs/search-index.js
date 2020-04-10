var searchIndex={};
searchIndex["libtelnet_rs"] = {"doc":"","i":[[3,"Parser","libtelnet_rs","A telnet parser that handles the main parts of the protocol.",null,null],[12,"options","","",0,null],[0,"bytes","","",null,null],[5,"concat","libtelnet_rs::bytes","Concatenate 2 `&[u8]` slices into a `Vec<u8>`",null,[[],[["vec",["u8"]],["u8"]]]],[0,"compatibility","libtelnet_rs","",null,null],[3,"CompatibilityEntry","libtelnet_rs::compatibility","An expansion of a bitmask contained in `CompatibilityTable`.",null,null],[12,"local","","Whether we support this option from us -> them.",1,null],[12,"remote","","Whether we support this option from them -> us.",1,null],[12,"local_state","","Whether this option is locally enabled.",1,null],[12,"remote_state","","Whether this option is remotely enabled.",1,null],[3,"CompatibilityTable","","A table of options that are supported locally or remotely,…",null,null],[11,"new","","",1,[[["bool"]],["self"]]],[11,"into_u8","","Creates a u8 bitmask from this entry.",1,[[],["u8"]]],[11,"from","","Expands a u8 bitmask into a CompatibilityEntry.",1,[[["u8"]],["self"]]],[18,"ENABLED_LOCAL","","Option is locally supported.",2,null],[18,"ENABLED_REMOTE","","Option is remotely supported.",2,null],[18,"LOCAL_STATE","","Option is currently enabled locally.",2,null],[18,"REMOTE_STATE","","Option is currently enabled remotely.",2,null],[11,"new","","",2,[[],["self"]]],[11,"from_options","","Create a table with some option values set.",2,[[],["self"]]],[11,"support_local","","Enable local support for an option.",2,[[["self"],["u8"]]]],[11,"support_remote","","Enable remote support for an option.",2,[[["self"],["u8"]]]],[11,"support","","Enable both remote and local support for an option.",2,[[["self"],["u8"]]]],[11,"get_option","","Retrieve a `CompatbilityEntry` generated from the current…",2,[[["self"],["u8"]],["compatibilityentry"]]],[11,"set_option","","Set an option value by getting the bitmask from a…",2,[[["compatibilityentry"],["self"],["u8"]]]],[0,"events","libtelnet_rs","",null,null],[3,"TelnetIAC","libtelnet_rs::events","A struct represting a 2 byte IAC sequence.",null,null],[12,"command","","",3,null],[3,"TelnetNegotiation","","A struct representing a 3 byte IAC sequence.",null,null],[12,"command","","",4,null],[12,"option","","",4,null],[3,"TelnetSubnegotiation","","A struct representing an arbitrary length IAC…",null,null],[12,"option","","",5,null],[12,"buffer","","",5,null],[4,"TelnetEvents","","An enum representing various telnet events.",null,null],[13,"IAC","","An IAC command sequence.",6,null],[13,"Negotiation","","An IAC negotiation sequence.",6,null],[13,"Subnegotiation","","An IAC subnegotiation sequence.",6,null],[13,"DataReceive","","Regular data received from the remote end.",6,null],[13,"DataSend","","Any data to be sent to the remote end.",6,null],[11,"new","","",3,[[["u8"]],["self"]]],[11,"into_bytes","","Consume the sequence struct and return the bytes.",3,[[],[["vec",["u8"]],["u8"]]]],[11,"new","","",4,[[["u8"]],["self"]]],[11,"into_bytes","","Consume the sequence struct and return the bytes.",4,[[],[["vec",["u8"]],["u8"]]]],[11,"new","","",5,[[["u8"]],["self"]]],[11,"into_bytes","","Consume the sequence struct and return the bytes.",5,[[],[["vec",["u8"]],["u8"]]]],[11,"build_send","","Helper method to generate a TelnetEvents::DataSend.",6,[[["vec",["u8"]],["u8"]],["self"]]],[11,"build_receive","","Helper method to generate a TelnetEvents::DataReceive.",6,[[["vec",["u8"]],["u8"]],["self"]]],[11,"build_iac","","Helper method to generate a TelnetEvents::IAC.",6,[[["u8"]],["telnetevents"]]],[11,"build_negotiation","","Helper method to generate a TelnetEvents::Negotiation.",6,[[["u8"]],["self"]]],[11,"build_subnegotiation","","Helper method to generate a TelnetEvents::Subnegotiation.",6,[[["vec",["u8"]],["u8"]],["self"]]],[0,"telnet","libtelnet_rs","",null,null],[0,"op_command","libtelnet_rs::telnet","Module containing constants for Telnet Command codes.",null,null],[17,"IAC","libtelnet_rs::telnet::op_command","",null,null],[17,"WILL","","",null,null],[17,"WONT","","",null,null],[17,"DO","","",null,null],[17,"DONT","","",null,null],[17,"NOP","","",null,null],[17,"SB","","",null,null],[17,"SE","","",null,null],[17,"IS","","",null,null],[17,"SEND","","",null,null],[17,"GA","","",null,null],[0,"op_option","libtelnet_rs::telnet","Module containing constants for Telnet Option codes.",null,null],[17,"BINARY","libtelnet_rs::telnet::op_option","",null,null],[17,"ECHO","","",null,null],[17,"RCP","","",null,null],[17,"SGA","","",null,null],[17,"NAMS","","",null,null],[17,"STATUS","","",null,null],[17,"TM","","",null,null],[17,"RCTE","","",null,null],[17,"NAOL","","",null,null],[17,"NAOP","","",null,null],[17,"NAOCRD","","",null,null],[17,"NAOHTS","","",null,null],[17,"NAOHTD","","",null,null],[17,"NAOFFD","","",null,null],[17,"NAOVTS","","",null,null],[17,"NAOVTD","","",null,null],[17,"NAOLFD","","",null,null],[17,"XASCII","","",null,null],[17,"LOGOUT","","",null,null],[17,"BM","","",null,null],[17,"DET","","",null,null],[17,"SUPDUP","","",null,null],[17,"SUPDUPOUTPUT","","",null,null],[17,"SNDLOC","","",null,null],[17,"TTYPE","","",null,null],[17,"EOR","","",null,null],[17,"TUID","","",null,null],[17,"OUTMRK","","",null,null],[17,"TTYLOC","","",null,null],[17,"_3270REGIME","","",null,null],[17,"X3PAD","","",null,null],[17,"NAWS","","",null,null],[17,"TSPEED","","",null,null],[17,"LFLOW","","",null,null],[17,"LINEMODE","","",null,null],[17,"XDISPLOC","","",null,null],[17,"ENVIRON","","",null,null],[17,"AUTHENTICATION","","",null,null],[17,"ENCRYPT","","",null,null],[17,"NEWENVIRON","","",null,null],[17,"MSSP","","",null,null],[17,"ZMP","","",null,null],[17,"EXOPL","","",null,null],[17,"MCCP2","","",null,null],[17,"MCCP3","","",null,null],[17,"GMCP","","",null,null],[11,"new","libtelnet_rs","Create a default, empty Parser.",0,[[],["self"]]],[11,"with_support","","Create a parser, directly supplying a CompatibilityTable.",0,[[["compatibilitytable"]],["self"]]],[11,"receive","","Receive bytes into the internal buffer.",0,[[["self"]],[["telnetevents"],["vec",["telnetevents"]]]]],[11,"escape_iac","","Escape IAC bytes in data that is to be transmitted and…",0,[[["vec",["u8"]],["u8"]],[["vec",["u8"]],["u8"]]]],[11,"unescape_iac","","Reverse escaped IAC bytes for non-IAC sequences and data.",0,[[["vec",["u8"]],["u8"]],[["vec",["u8"]],["u8"]]]],[11,"negotiate","","Negotiate an option.",0,[[["self"],["u8"]],[["vec",["u8"]],["u8"]]]],[11,"_will","","Indicate to the other side that you are able and wanting…",0,[[["self"],["u8"]],[["vec",["u8"]],["option",["vec"]]]]],[11,"_wont","","Indicate to the other side that you are not wanting to…",0,[[["self"],["u8"]],[["vec",["u8"]],["option",["vec"]]]]],[11,"_do","","Indicate to the other side that you would like them to…",0,[[["self"],["u8"]],[["vec",["u8"]],["option",["vec"]]]]],[11,"_dont","","Indicate to the other side that you would like them to…",0,[[["self"],["u8"]],[["vec",["u8"]],["option",["vec"]]]]],[11,"subnegotiation","","Send a subnegotiation for a locally supported option.",0,[[["self"],["vec",["u8"]],["u8"]],[["vec",["u8"]],["option",["vec"]]]]],[11,"subnegotiation_text","","Send a subnegotiation for a locally supported option,…",0,[[["str"],["self"],["u8"]],[["vec",["u8"]],["option",["vec"]]]]],[11,"send","","Directly send a buffer to the remote end.",0,[[["self"]],[["vec",["u8"]],["u8"]]]],[11,"send_text","","Directly send a string, with appended `\\r\\n`, to the…",0,[[["str"],["self"]],[["vec",["u8"]],["u8"]]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"into","","",0,[[],["u"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"try_into","","",0,[[],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"type_id","","",0,[[["self"]],["typeid"]]],[11,"from","libtelnet_rs::compatibility","",1,[[["t"]],["t"]]],[11,"into","","",1,[[],["u"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,[[["self"],["t"]]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"try_into","","",1,[[],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"type_id","","",1,[[["self"]],["typeid"]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"into","","",2,[[],["u"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"try_into","","",2,[[],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"type_id","","",2,[[["self"]],["typeid"]]],[11,"from","libtelnet_rs::events","",3,[[["t"]],["t"]]],[11,"into","","",3,[[],["u"]]],[11,"to_owned","","",3,[[["self"]],["t"]]],[11,"clone_into","","",3,[[["self"],["t"]]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"try_into","","",3,[[],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"type_id","","",3,[[["self"]],["typeid"]]],[11,"from","","",4,[[["t"]],["t"]]],[11,"into","","",4,[[],["u"]]],[11,"to_owned","","",4,[[["self"]],["t"]]],[11,"clone_into","","",4,[[["self"],["t"]]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"try_into","","",4,[[],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"type_id","","",4,[[["self"]],["typeid"]]],[11,"from","","",5,[[["t"]],["t"]]],[11,"into","","",5,[[],["u"]]],[11,"to_owned","","",5,[[["self"]],["t"]]],[11,"clone_into","","",5,[[["self"],["t"]]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"try_into","","",5,[[],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"type_id","","",5,[[["self"]],["typeid"]]],[11,"from","","",6,[[["t"]],["t"]]],[11,"into","","",6,[[],["u"]]],[11,"to_owned","","",6,[[["self"]],["t"]]],[11,"clone_into","","",6,[[["self"],["t"]]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"try_into","","",6,[[],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"type_id","","",6,[[["self"]],["typeid"]]],[11,"clone","libtelnet_rs::compatibility","",1,[[["self"]],["compatibilityentry"]]],[11,"clone","libtelnet_rs::events","",3,[[["self"]],["telnetiac"]]],[11,"clone","","",4,[[["self"]],["telnetnegotiation"]]],[11,"clone","","",5,[[["self"]],["telnetsubnegotiation"]]],[11,"clone","","",6,[[["self"]],["telnetevents"]]],[11,"default","libtelnet_rs::compatibility","",2,[[],["self"]]],[11,"default","libtelnet_rs","",0,[[],["parser"]]]],"p":[[3,"Parser"],[3,"CompatibilityEntry"],[3,"CompatibilityTable"],[3,"TelnetIAC"],[3,"TelnetNegotiation"],[3,"TelnetSubnegotiation"],[4,"TelnetEvents"]]};
addSearchOptions(searchIndex);initSearch(searchIndex);