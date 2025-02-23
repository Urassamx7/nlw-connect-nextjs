'use client'
import { IconButton } from '@/components/icon-button'
import { InputRoot, InputIcon, InputField } from '@/components/input'
import { Link, Copy } from 'lucide-react'
import React from 'react'

interface InviveLinkProps {
  inviteLink: string
}
const InviteLinkInput = ({ inviteLink }: InviveLinkProps) => {
  const copyInviteLink = () => {
    navigator.clipboard.writeText(inviteLink)
    alert('Link copiado')
  }
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField defaultValue={inviteLink} readOnly onClick={copyInviteLink} />
      <IconButton className="-mr-2" onClick={copyInviteLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}

export default InviteLinkInput
