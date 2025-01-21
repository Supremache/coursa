import { UserAuthForm } from '@/components/forms/user-auth-form';

export default function Admin() {

  return (
    <div className='h-[100vh] flex items-center justify-center'>
        <UserAuthForm mode={'signin'} showSignInContinues={false} routePath={"/admin/dashboard"}/>
    </div>
  )
}
