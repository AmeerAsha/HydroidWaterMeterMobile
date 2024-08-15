module.exports = {
    RAZORPAY_SECRET: 'iPcqI8cJj0nVQAPfEdzJqnb3',
    RAZORPAY_KEY_ID: 'rzp_test_HAF6HCcH7moc64',
    APILOCALURL: 'https://localhost:7095/api/',
    APISERVERURL: 'https://hydroidwater.azurewebsites.net/api/',
    APIACTIVATEURL: 'https://hydroidwater.azurewebsites.net/api/',
  
    LOCALWEBURL: 'http://localhost:3000/',
    DEVWEBURL: 'http://hydroid.trawtel.com/',
    APITEMPURL: 'https://localhost:7095/api/',
    DOMAINLOCALURL: 'http://localhost:3000/',
    DOMAINSERVERURL: 'http://hydroid.ztravelsonline.com/',
    DOMAINACTIVATEURL: 'http://localhost:3000/',
  
    BULKUPLOADUSERDEVICES:'BulkUpload/UploadUserDevices',
    SUPERDASHBOARDCOUNT:'Dashboard/GetSuperCount',
    ADMINDASHBOARDCOUNT:'Dashboard/GetAdminCount',
    GETDASHBOARDORGANISATION:'Dashboard/GetByOrganisation',
    GETDASHBOARDCOUNT:'Dashboard/GetDashboardCount',
    GETORGANISATIONTREE:'Dashboard/GetAdminTree',
    GETFLOORS:'Dashboard/GetFloors',
    GETWINGS:'Dashboard/GetWings',
    GETBLOCKS:'Dashboard/GetBlocks',
  
    GETALLROLES: 'Roles',
    CREATEROLE: 'Roles',
    UPDATEROLE: 'Roles',
    DELETEROLE: 'Roles',
    GETROLEBYID: 'Roles/GetById',
  
    GETALLUSERS: 'Users/GetAll',
    GETALLORGANISATIONUSERS: 'Users/GetAllByOrganisation',  
    REGISETERADMIN:'Users/admin-register',
    GETCUSTOMERS: 'Users/GetCustomers',
    GETALLCUSTOMERS: 'Users/GetAllCustomers',
    GETADMINS: 'Users/GetAdmin',
    CREATEUSER: 'Users/user-register',
    LOGINUSER: 'Home/Login',
    CHANGEPASSWORD: 'Users/ChangePassword',
    GETUSERBYID: 'Users/GetById',
    DELETEUSER: 'Users',
    USERSTATUS: 'Users/Status',
    USERPROFILE: 'Users/Profile',
  
    GETALLDEVICES: 'Device/GetAll',
    GETDEVICES: 'Device',
    CREATEDEVICE: 'Device',
    UPDATEDEVICE: 'Device',
    DELETEDEVICE: 'Device',
    GETDEVICEBYID: 'Device/GetById',
    GETACTIVEDEVICE: 'Device/GetActive',
    GETUSERACTIVEDEVICE: 'Device/GetUserActive',
  
    GETUSERBARGRAPH:'WaterUsage/GetUserBarGraph',
    GETUSERMETERREADING:'WaterUsage/GetUserMeterReading',
    //GETALLDEVICESDATA: 'DevicesData',
    //GETDEVICEDATABYID: 'DevicesData/GetById',
    //GETDEVICEDATABYDEVICE: 'DevicesData/Devices/GetByDevice',
    //GETBARGRAPHDEVICEDATA :'DevicesData/GetBarGraphData',
    //GETWATERUSAGECOUNT :'DevicesData/GetWaterUsageCount',
    //GETCOUNTSDEVICEDATA :'DevicesData/GetAdminCount',
    //GETDEVICEDATABYUSER :'DevicesData/GetMeterReadingByuser',
  
    GETALLTICKETS: 'Ticket',
    CREATETICKET: 'Ticket',
    UPDATETICKET: 'Ticket',
    DELETETICKET: 'Ticket',
    GETTICKETBYID: 'Ticket',
    GETTICKETBYCATEGORY: 'Ticket/GetByCategory',
    GETTICKETBYUSER: 'Ticket/GetByUser',
    GETTICKETBYSTATUS: 'Ticket/GetByStatus',
  
    GETALLTICKETCATEGORIES: 'TicketCategory',
  
    GETALLTICKETRESPONSES: 'TicketResponse',
    CREATETICKETRESPONSE: 'TicketResponse',
    UPDATEDTICKETRESPONSE: 'TicketResponse',
    DELETETICKETRESPONSE: 'TicketResponse',
    GETTICKETRESPONSEBYID: 'TicketResponse/GetByTicketId',
  
    GETALLORGANISATIONS: 'Organisation/GetAll',
    GETORGANISATIONS: 'Organisation',
    CREATEORGANISATION: 'Organisation',
    UPDATEORGANISATION: 'Organisation',
    DELETEORGANISATION: 'Organisation',
    GETORGANISATIONBYID: 'Organisation',
  
    GETALLAPARTMENTS: 'Apartment',
    CREATEAPARTMENT: 'Apartment',
    UPDATEAPARTMENT: 'Apartment',
    DELETEAPARTMENT: 'Apartment',
    GETAPARTMENTBYID: 'Apartment',
  
    GETALLBLOCKS: 'Block',
    CREATEBLOCK: 'Block',
    UPDATEBLOCK: 'Block',
    DELETEBLOCK: 'Block',
    GETBLOCKBYID: 'Block',
    GETBLOCKBYORGANISATION: 'Block/GetByOrganisationId',
  
    GETALLFLOORS: 'Floor',
    CREATEFLOOR: 'Floor',
    UPDATEFLOOR: 'Floor',
    DELETEFLOOR: 'Floor',
    GETFLOORBYID: 'Floor',
    GETFlOORBYBLOCK: 'Floor/GetByBlockId',
  
    GETALLUNITS: 'Unit',
    CREATEUNIT: 'Unit',
    UPDATEUNIT: 'Unit',
    DELETEUNIT: 'Unit',
    GETUNITBYID: 'Unit',
  
    GETALLMESSAGES: 'Message',
    CREATEMESSAGE: 'Message',
    UPDATEMESSAGE: 'Message',
    DELETEMESSAGE: 'Message',
    GETMESSAGEBYID: 'Message/GetById',
    GETDISPLAYMESSAGE: 'Message/GetDisplayMessage',
  
    GETALLUSERDEVICES: 'UserDevice/GetAll',
    GETUSERDEVICES: 'UserDevice',
    CREATEUSERDEVICE: 'UserDevice',
    UPDATEUSERDEVICE: 'UserDevice',
    DELETEUSERDEVICE: 'UserDevice',
    GETUSERDEVICEBYUSER: 'Users/GetUserDevices',
    GETALLACTIVEUSERDEVICES: 'UserDevice/GetAllActive',
    GETUSERDEVICESBYID: 'UserDevice/GetById',
  
    GETALLNOTIFICATIONS: 'Notification',
    CREATENOTIFICATION: 'Notification',
    UPDATENOTIFICATION: 'Notification',
    DELETENOTIFICATION: 'Notification',
    GETNOTIFICATIONBYID: 'Notification',
    GETNOTIFICATIONUNREAD: 'Notification/unread',
    GETNOTIFICATIONREAD: 'Notification/read',
    GETNOTIFICATIONBYUSER: 'Notification/GetByUser',
  
    GETALLPAYMENTREQUESTS: 'Payment',
    CREATEPAYMENTREQUEST: 'Payment',
    UPDATEPAYMENTREQUEST: 'Payment',
    CANCELPAYMENTREQUEST: 'Payment/CancelPayment',
    GETNPAYMENTREQUESTBYID: 'Payment/GetById',
    GETPAYMENTREQUESTBYUSER: 'Payment/GetByUser',
    PROCESSPAYMENTORDER: 'Payment/ProcessRequestOrder',
  
    GETWATERUSAGECOUNT: 'WaterUsage/GetWaterUsageCount',
    GETUSERWATERUSAGECOUNT: 'WaterUsage/GetUserWaterUsageCount',
    GETBARGRAPHDATA: 'WaterUsage/GetBarGraphData',
    GETUSERBARGRAPHDATA: 'WaterUsage/GetUserBarGraph',
    GETLEAKDATA: 'WaterUsage/GetLeakInformation',
    GETBARGRAPHDATEWISE: 'WaterUsage/GetBarGraphDateWise',
    GETUSERBARGRAPHDATEWISE: 'WaterUsage/GetUserBarGraphDateWise',
    GETMETERDATABYUSER: 'WaterUsage/GetUserMeterReading',
    
    GETDEVICEDATABYDEVICE: 'WaterUsage/GetBarGraphByDevice',
    GETMETERDATABYDEVICE: 'WaterUsage/GetMeterReadingListByDevice',
  }