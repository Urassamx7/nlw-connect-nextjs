import logo from '@/assets/logo.svg'
import Image from 'next/image'
import InviteLinkInput from './_components/invite-link-input'
import Ranking from './_components/ranking'
import Stats from './_components/stats'
interface InvitePageProps {
  params: Promise<{ subscriberId: string }>
}
const InvitePage = async (props: InvitePageProps) => {
  const { subscriberId } = await props.params
  const inviteLink = `http://localhost:3333/invites/${subscriberId}`

  return (
    <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        <Image src={logo} alt="Devstage" width={108.5} height={30} />
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">
            Inscrição confirmada!
          </h1>
          <p className="text-gray-300">
            Para entrar no evento, acesse o link enviado para seu e-mail.
          </p>
        </div>
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
              Indique e ganhe
            </h2>
            <p className="text-gray-300">
              Convide mais pessoas para o evento e concor a pr6emios exclusivos!
              É só compartilhar o link abaixo e acompanhar as inscrições.
            </p>
          </div>
          <InviteLinkInput inviteLink={inviteLink} />
          <Stats subscriberId={subscriberId}/>
        </div>
      </div>

      <div className="w-full max-w-[440px] space-y-5">
        <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
          Ranking de indicações
        </h2>
        <Ranking />
      </div>
    </div>
  )
}

export default InvitePage
