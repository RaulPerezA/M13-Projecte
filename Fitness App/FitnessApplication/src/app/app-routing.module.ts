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
    path: 'createexercices',
    loadChildren: () => import('./createexercices/createexercices.module').then( m => m.CreateexercicesPageModule)
  },  {
    path: 'initroutine',
    loadChildren: () => import('./initroutine/initroutine.module').then( m => m.InitroutinePageModule)
  },
  {
    path: 'generalrutine',
    loadChildren: () => import('./generalrutine/generalrutine.module').then( m => m.GeneralrutinePageModule)
  },
  {
    path: 'modifydailyrutine',
    loadChildren: () => import('./modifydailyrutine/modifydailyrutine.module').then( m => m.ModifydailyrutinePageModule)
  },
  {
    path: 'contentgeneralrutine',
    loadChildren: () => import('./contentgeneralrutine/contentgeneralrutine.module').then( m => m.ContentgeneralrutinePageModule)
  },
  {
    path: 'editdailyrutine',
    loadChildren: () => import('./editdailyrutine/editdailyrutine.module').then( m => m.EditdailyrutinePageModule)
  },
  {
    path: 'exercice',
    loadChildren: () => import('./exercice/exercice.module').then( m => m.ExercicePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
