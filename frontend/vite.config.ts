import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy:{
      '/api': "http://localhost:3000"
    }
  },
  plugins: [react()],

})


// url different hai too bhi voo cross origin hai
// port different hai too bhi voo cross origin hainn

// origin same means same url, same port 

// --------
// Backend developer koo kaho kayy meray url koo whitelist kar doo 

// ip whitelist kar loo yaa domain whitelist kar loo 


// CORS kaa solution hai proxies

// App nayy proxy add kardi , takay joo bhi request apki toolchain sayy jayye gii uss sayy pehlay voo url append hoo jayye gaa aur voo server koo request aisay appear hoo gii jaisay usss url sayy aa raii hai yani humm nayy apni request koo proxy kar dia


// server: {
//     proxy:{
//       "/api": "http://localost:3000"
//     }
//   }
  
//   abb hamari axios kii request sayy pehly jahan bhi /api huva wahan yehh url http://localost:3000 append ho jayye gaa aur uss kayy sathh sathh server koo aisayy lagay gaa kayy jaisay joo request hai vopp http://localost:3000 sayy aa rai haii halankay voo port 8000 sayy send karr rahay hainn , lakin server koo yehh lagay gaa kayy voo http://localost:3000 sayy aa rai hai yani humm nayy iss rquest koo iss url say http://localost:3000 proxy karr dia , abb server koo lagta hai kayy request http://localost:3000 sayyy aa rai hai 
  
//   aur yehh kunkay server kaa apna origin hai jiss par humm request koo proxy karr rahay hainn too cross origin hoo gaa hii nai aur masla khatam kunkay uss koo lagay gaa kayy same origin sayy aa rai hai request 
  
  
//   Total 2 options hainn CORS koo solve karnay kayy liye :
//   1. Whitelisting karo origin kii
//   2.Proxy karoo requests koo 
  
  
//   CORS kaa sara concept iss bat par depend karta hai kayy dusray koo ghar mainn enter nai honay dena too nai honay dena 
  
  


