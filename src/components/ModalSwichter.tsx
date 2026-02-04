import type { FC, ChangeEvent } from "react"

import { useState } from "react"

interface ModalSwichterInput {
  urls: string[]
  labels: string[]
}

type ModalSwichterProps = FC<ModalSwichterInput>

type ProductType = 'timeless' | 'renewed' | 'perfect';

const ModalSwichter: ModalSwichterProps = ({ urls, labels }) => {
  const [selected, setSelected] = useState<null | ProductType>(null)
  const handleSelected = (e: ChangeEvent<any>) => setSelected(e.target.value)
  
  if(!selected) return (<fieldset>
    <legend className="text-sm font-medium text-gray-900 mb-3">Selecciona una opción</legend>
    <div className="space-y-2">
      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-gray-300 has-checked:border-black has-checked:bg-gray-50 transition-colors">
        <input type="radio" name="opcion" value="timeless" className="w-4 h-4 accent-black" onClick={handleSelected} />
        <span className="text-sm text-gray-900">{labels[0]}</span>
      </label>
      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-gray-300 has-checked:border-black has-checked:bg-gray-50 transition-colors">
        <input type="radio" name="opcion" value="renewed" className="w-4 h-4 accent-black" onClick={handleSelected} />
        <span className="text-sm text-gray-900">{labels[1]}</span>
      </label>
      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-gray-300 has-checked:border-black has-checked:bg-gray-50 transition-colors">
        <input type="radio" name="opcion" value="perfect" className="w-4 h-4 accent-black" onClick={handleSelected} />
        <span className="text-sm text-gray-900">{labels[2]}</span>
      </label>
    </div>
  </fieldset>)

  if(selected == "timeless") return <iframe src={urls[0]} className="w-full h-[50vh] border-0" title="Square Checkout" />
  
  if(selected == "renewed") return <iframe src={urls[1]} className="w-full h-[50vh] border-0" title="Square Checkout" />
  
  if(selected == "perfect") return <iframe src={urls[2]} className="w-full h-[50vh] border-0" title="Square Checkout" />

  return null
}

export {ModalSwichter}
