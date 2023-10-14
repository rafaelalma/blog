import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { useTranslations } from '../i18n/utils'

type Props = {
  lang: 'en' | 'es'
}

export default function Menu({ lang }: Props) {
  const t = useTranslations(lang)

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-8 icon-menu"
        >
          <path
            className="secondary"
            fillRule="evenodd"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          ></path>
        </svg>
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="absolute inset-0 bg-white flex flex-col gap-48 p-6"
      >
        <button onClick={() => setIsOpen(false)} className="self-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 icon-close"
          >
            <path
              className="secondary"
              fillRule="evenodd"
              d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"
            ></path>
          </svg>
        </button>
        <Dialog.Panel>
          <nav>
            <ul className="flex flex-col gap-6">
              <li>
                <a className="text-3xl block w-full" href={`/${lang}/about`}>
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a className="text-3xl block w-full" href={`/${lang}/blog`}>
                  {t('nav.blog')}
                </a>
              </li>
              <li>
                <a className="text-3xl block w-full" href={`/${lang}/tags`}>
                  {t('nav.tags')}
                </a>
              </li>
            </ul>
          </nav>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}
