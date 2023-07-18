import { t } from 'i18next'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { LangSwithers } from 'widgets/LangSwitchers'
import { ThemeSwitchers } from 'widgets/ThemeSwitchers'

import cls from './Sidebar.module.scss'

interface ISidebarProps {
  className?: string
}

export const Sidebar = (props: ISidebarProps) => {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()

  const onToggleCollapsed = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <aside
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className
      ])}
    >
      <div>
        <Button onClick={onToggleCollapsed}>
          {
            t('toggle')
          }</Button>
      </div>

      <div className={cls.switchers}>
        <ThemeSwitchers className={cls.switchers__first}/>
        <LangSwithers />
      </div>
    </aside>
  )
}
