import React, {useEffect, useReducer, useState} from "react"
import {Router} from "./routers"
import {Avatar} from "./components/Avatar"
import {Menu} from "./components/Menu"
import {BrowserRouter, Link} from "react-router-dom"
import {ThemeItem} from "./components/ThemeItem"
import styles from "./App.less"
import {ColorItemProps, MenuProps} from "./types"
import {BasePath} from "./types/config";
import store, {initialState, reducer} from "./layout/store";
import {colorList} from "./utils/default";
import {blogAuthName, getFile} from "./utils";

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [isShowAside, setIsShowAside] = useState<boolean>(false)
    const [menuItem, setMenuItem] = useState<any[]>([])
    const [colorItem, setColorItem] = useState<ColorItemProps[]>([])
    useEffect(() => {
        const name: string = localStorage.getItem("theme") || ""
        const data = colorList.map(v => {
            return {
                ...v,
                active: v.name === name
            }
        })

        setColorItem(data)
        dispatch({ type: "SET_THEME", value: name })
    }, [])
  useEffect(() => {
    getList()
  }, [])

  const getList = async () => {
    const arr = await getFile()

    const list  = state.menuItem.map(v => {
      if(v.id === 2){
        v.child = arr.map((item: any, index: number) => {
          return {
            ...item,
            name: item.name,
            active: false,
            icon: 'icon-zaocan',
            child: [],
            href: "/blogContent/" + item.name,
            id: index + 1,
            parentId: v.id,
          }
        })
      }
      return {...v}
    })
    setMenuItem(list)
    dispatch({ type: "SET_MENUS", value: list })

  }

    const handleAside = () => {
        if (isShowAside) {
            setIsShowAside(!isShowAside)
        }
    }

    const mapTree = (data: MenuProps[], item: MenuProps) => {
      return data.map((v: MenuProps) => {
        if (v.name === item.name && v.id === item.id) {
          v.active = !v.active
        } else {
          if (v.child && v.child.length > 0) {
            v.child = mapTree(v.child, item)
          }
        }
        return {...v}
      })
    }

    const handleAngleUp = (item: MenuProps) => {
      const data: MenuProps[] = mapTree(menuItem, item)
      dispatch({ type: "SET_MENUS", value: data })
      setMenuItem(data)
    }

    const themeClass = (name: string) => {
        const data = colorItem.map(v => {
            return {
                ...v,
                active: v.name === name
            }
        })

        // document.body.classList.remove('theme-green', 'theme-blue');
        // document.body.classList.add(`theme-${name}`)
        dispatch({ type: "SET_THEME", value: name })
        setColorItem(data)
    }

    useEffect(() => {

    }, [state.theme])

    const onChangeTheme = (value: boolean) => {
        setIsShowAside(value)
    }



    return (
      <store.Provider value={{state, dispatch}}>
        <div className={`${styles.App}`}>
            <BrowserRouter>
                {isShowAside && (
                    <aside>
                        <div className={styles.asideHeader}>
                            <div className={styles.avatar}>
                                <Avatar />
                            </div>
                            <div>
                                <div className={styles.asideName}>{blogAuthName}</div>
                                <div className={styles.asideDesc}>{blogAuthName}</div>
                            </div>
                        </div>
                        <div className={styles.menuContainer}>
                          <div style={{height: '100%', overflow: 'auto'}}>
                            <Menu menuItem={menuItem} callback={handleAngleUp} />

                          </div>
                        </div>

                        <ThemeItem callback={themeClass} theme={state.theme} colorItem={colorItem} />
                    </aside>
                )}
                <div className={styles.content} onClick={handleAside}>
                    {isShowAside && <div className={styles.mask} />}
                    <header>
                        <div className={`${styles.headerBg} ${styles[state.theme]}`}>
                            <div className={styles.headerMenu}>
                                <div className={styles.menu} onClick={() => onChangeTheme(true)}>
                                    <span className={'icon iconfont icon-xitongcaidan'}></span>
                                </div>
                                <div>
                                  <Link to={`${BasePath}/blog`} className={styles.link}>博客编辑</Link>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className={styles.nav}>
                        <nav>
                            <Router onChnageTheme={onChangeTheme} theme={state.theme} />
                        </nav>
                    </div>
                </div>
            </BrowserRouter>
        </div>
      </store.Provider>
    )
}

export default App
