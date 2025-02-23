import { IconButton } from '@/components/icon-button'
import { InputRoot, InputIcon, InputField } from '@/components/input'
import { Link, Copy } from 'lucide-react'
import React from 'react'

const InviteLinkInput = () => {
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField defaultValue="http://3333/invite/abcd-234wnmrbms" readOnly />
      <IconButton className="-mr-2">
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}

export default InviteLinkInput
