import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'slides',
    loadChildren: () => import('./slides/slides.module').then( m => m.SlidesPageModule)
  },
  {
    path: 'userprofile',
    loadChildren: () => import('./userprofile/userprofile.module').then( m => m.UserprofilePageModule)
  },
  {
    path: 'exercices',
    loadChildren: () => import('./exercices/exercices.module').then( m => m.ExercicesPageModule)
  },
  {
    path: 'diets',
    loadChildren: () => import('./diets/diets.module').then( m => m.DietsPageModule)
  },
  {
    path: 'onereceta',
    loadChildren: () => import('./onereceta/onereceta.module').then( m => m.OnerecetaPageModule)
  },
  {
    path: 'onealiment',
    loadChildren: () => import('./onealiment/onealiment.module').then( m => m.OnealimentPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'calculatorweight',
    loadChildren: () => import('./calculatorweight/calculatorweight.module').then( m => m.CalculatorweightPageModule)
  },
  {
    path: 'continueroutine',
    loadChildren: () => import('./continueroutine/continueroutine.module').then( m => m.ContinueroutinePageModule)
  },
  {
    path: 'initroutine',
    loadChildren: () => import('./initroutine/initroutine.module').then( m => m.InitroutinePageModule)
  },
  {
    path: 'listgenerals',
    loadChildren: () => import('./listgenerals/listgenerals.module').then( m => m.ListgeneralsPageModule)
  },
  {
    path: 'addgeneral',
    loadChildren: () => import('./addgeneral/addgeneral.module').then( m => m.AddgeneralPageModule)
  },
  {
    path: 'dailyrutine',
    loadChildren: () => import('./dailyrutine/dailyrutine.module').then( m => m.DailyrutinePageModule)
  },
  {
    path: 'editgeneral',
    loadChildren: () => import('./editgeneral/editgeneral.module').then( m => m.EditgeneralPageModule)
  },
  {
    path: 'add-exercice',
    loadChildren: () => import('./add-exercice/add-exercice.module').then( m => m.AddExercicePageModule)
  },
  {
    path: 'add-daily',
    loadChildren: () => import('./add-daily/add-daily.module').then( m => m.AddDailyPageModule)
  },
  {
    path: 'listexercice',
    loadChildren: () => import('./listexercice/listexercice.module').then( m => m.ListexercicePageModule)
  },
  {
    path: 'createexercice',
    loadChildren: () => import('./createexercice/createexercice.module').then( m => m.CreateexercicePageModule)
  },
  {
    path: 'configure-exercice',
    loadChildren: () => import('./configure-exercice/configure-exercice.module').then( m => m.ConfigureExercicePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
