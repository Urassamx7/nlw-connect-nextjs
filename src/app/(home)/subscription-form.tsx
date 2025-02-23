import { Button } from '@/components/button'
import { InputRoot, InputIcon, InputField } from '@/components/input'
import { User, Mail, ArrowRight } from 'lucide-react'
import React from 'react'

const SubscriptionForm = () => {
  return (
    <form className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]">
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>
      <div className="space-y-3">
        <InputRoot>
          <InputIcon>
            <User />
          </InputIcon>
          <InputField type="text" placeholder="Nome completo" />
        </InputRoot>
        <InputRoot>
          <InputIcon>
            <Mail />
          </InputIcon>
          <InputField type="email" placeholder="email" />
        </InputRoot>
        <Button type="submit">
          Confirmar
          <ArrowRight />
        </Button>
      </div>
    </form>
  )
}

export default SubscriptionForm
