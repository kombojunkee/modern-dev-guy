import Header2 from "../ui/Header/Header2";

const Layout = ({children}) => {
  
  return (
    <div className='st-get-sidebar'>
      <Header2 />{children}
    </div>
  )
}
export default Layout;
