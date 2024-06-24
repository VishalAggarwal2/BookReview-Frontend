import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return     <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', margin: 'auto', padding: '20px' }}>
  <SignIn />
</div>
}