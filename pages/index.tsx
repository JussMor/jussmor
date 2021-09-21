/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import Auth from '../components/Auth'
import Account from '../components/Account'
import { AuthSession } from '@supabase/supabase-js'
import Layout from '../components/Layout'
import Footer from "../components/Footer";

export default function Home() {
  const [session, setSession] = useState<AuthSession | null >(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div>
      <Layout>
      {/* <div className="container" style={{ padding: '50px 0 100px 0' }}>
        {!session ? <Auth /> : <Account key={session.user!.id} session={session} />}
      </div> */}
      <div style={{ padding: '50px 0 100px 0' }}>
        <h1> Hola soy Jussmor</h1>
        <p>Soy un recien egresado de ingenieria mecanica amante de la danza la ciencia
          los hechos curiosos y aspirante ha astronauta imaginario de The Martian 
        </p>
      </div>

      </Layout>
    </div>
  )
}