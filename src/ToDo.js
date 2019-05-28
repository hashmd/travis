import React, { useState } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/styles'
import {
  CheckBoxRounded as DoneIcon,
  CheckBoxOutlineBlankRounded as NotDoneIcon,
  SendRounded as AddIcon
} from '@material-ui/icons'
import {
  AppBar,
  Avatar,
  Container,
  Divider,
  IconButton,
  Input,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Toolbar,
  Typography
} from '@material-ui/core'

import {
  addTodo,
  removeTodo,
  toggleTodo
} from './store'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    padding: theme.spacing(0)
  },
  grow: {
    flexGrow: 1
  },
  toolbar: theme.mixins.toolbar
}))

const ToDo = props => {
  const classes = useStyles()
  const [ input, setInput ] = useState('')
  const { todos, dispatch } = props

  return <>
    <AppBar position='fixed'>
      <Toolbar>
        <Typography variant='h6' color='inherit'>
          Mis Tareas
        </Typography>

        <div className={classes.grow} />

        <Input
          type='text'
          placeholder='Redacta tu tarea'
          value={input}
          onChange={ev => setInput(ev.target.value)}
        />

        <IconButton
          onClick={ev => {
            input.trim() && dispatch(addTodo(input))
            setInput('')
          }}
        >
          <AddIcon />
        </IconButton>
      </Toolbar>
    </AppBar>

    <div className={classes.toolbar} />

    <Container maxWidth='sm' className={classes.root}>
      <List>
        { todos.map((todo, i) => (
          <div key={i}>
            <ListItem button
              onClick={ev => dispatch(toggleTodo(i))}
              onContextMenu={ev => {
                ev.preventDefault()
                dispatch(removeTodo(i))
              }}
            >
              <ListItemAvatar>
                <Avatar>
                  { todo.done ? <DoneIcon /> : <NotDoneIcon />}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={todo.text} />
            </ListItem>
            <Divider variant='inset' />
          </div>
        )) }
      </List>
    </Container>
  </>
}

export default connect(store => ({
  todos: JSON.parse(JSON.stringify(store.todos))
}))(ToDo)
