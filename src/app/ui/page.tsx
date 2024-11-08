'use client';
import MainButton from "@/shared/MainButton/MainButton";
// A temporary page for displaying UI components.
export default function uiPage() {
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', width:'100%', height:"100%", gap:'20px'}}>

      <MainButton 
        variant="iconGoogle" 
        onClick={()=>{console.log("iconGoogle")}}>
        Sign in with Google
      </MainButton>

      <MainButton variant="iconGit">
        Sign in with GitHub
      </MainButton>

      <MainButton>
        Увійти
      </MainButton>

      <MainButton>
        Зареєструватись
      </MainButton>

      <MainButton disabled>
        Увійти  disabled
      </MainButton>
    </div>
  )
}