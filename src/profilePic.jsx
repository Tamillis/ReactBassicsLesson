export default function ProfilePic() {
    const pic = {
        styles:{
            width: "200px",
            height: "200px",
            borderRadius: "25%"
        },
        url : "https://bellaby.co.uk/assets/profile-pic.f7c0ef8d.jpg"
      };
      
    return <>
        <img src={pic.url} style={pic.styles} className="logo"/>
    </>
}